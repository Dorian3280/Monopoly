import { Meteor } from 'meteor/meteor';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import HistoryContainer from '/imports/ui/elements/HistoryContainer';
import TurnPlayerContainer from '/imports/ui/elements/TurnPlayerContainer';
import Actions from '/imports/ui/elements/Actions';
import ActionButton from '/imports/ui/elements/ActionButton';
import Dices from '/imports/ui/elements/Dices';
import HistoryLine from '/imports/ui/elements/HistoryLine';
import Process from '/imports/ui/elements/Process';
import Dice from '/imports/ui/elements/Dice';
import Image from '/imports/ui/elements/Image';
import Title from '/imports/ui/elements/Title';
import Span from '/imports/ui/elements/Span';
import BoardContainer from '/imports/ui/elements/BoardContainer';
import BoxContainer from '/imports/ui/elements/BoxContainer';
import BoxCenter from '/imports/ui/elements/BoxCenter';
import Token from '/imports/ui/elements/Token';
import ModalComponent from './ModalComponent';

import History from '/imports/api/actionsHistory/index';
import ActionsProcess from '/imports/api/actionsProcess/index';

const Board = ({players, currentPlayer, boxes, cards}) => {
    const [showModal, setShowModal] = useState(false);
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [history, setHistory] = useState([]);
    const [actions, setActions] = useState({});

    const setResultActionProcess = useCallback((key, key2, data) => {
        Meteor.call('actions.addResult', key, key2, data)
    }, []);

    const setProgressActionProcess = useCallback((key, data) => {
        Meteor.call('actions.addProgress', key, data)
    }, []);

    const handleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);
   
    useEffect(() => {
        console.log(currentPlayer.state)
        if (currentPlayer.state === 'roll') {
            Meteor.call('actions.addProgress', 'roll')
        }
    }, [currentPlayer]);

    const [readyTrackerHistory, trackerHistory] = useTracker(() => {
        const publication = Meteor.subscribe('history.getHistory');
    
        return [
          publication.ready(),
          History.find({}, { sort: { createdAt: -1 }}).fetch()
        ];
    }, [History]);
    
    useEffect(() => {
        if (readyTrackerHistory) setHistory(trackerHistory)
    }, [trackerHistory, readyTrackerHistory]);

    const [readyTrackerActions, trackerActions] = useTracker(() => {
        const publication = Meteor.subscribe('actions.getActions');
    
        return [
          publication.ready(),
          ActionsProcess.findOne({})
        ];
    }, [ActionsProcess]);
    
    useEffect(() => {
        if (readyTrackerActions) setActions(trackerActions)
    }, [readyTrackerActions, trackerActions]);

    const rollTheDice = useCallback(() => {
        const randomTimes = Math.floor(Math.random() * 2) + 5;
        let x = 1;
        const interval = setInterval(() => {
            const randomNumber1 = Math.floor(Math.random() * 6) + 1;
            const randomNumber2 = Math.floor(Math.random() * 6) + 1;
            setDice1(randomNumber1);
            setDice2(randomNumber2);
            if (x === randomTimes) {
                clearInterval(interval);
                const number = randomNumber1 + randomNumber2;
                const isDouble = randomNumber1 === randomNumber2;
                if (!isDouble && currentPlayer.didDouble) Meteor.call('player.resetDouble', currentPlayer.id)
                if (isDouble) Meteor.call('player.didDouble', currentPlayer.id)
                setResultActionProcess('roll','result', {number, isDouble});
                moveTo(number);
            }
            x++;
        }, 150);
    }, [players, boxes, currentPlayer]);

    // TODO
    // Gérer la téléportation
    const moveTo = useCallback((locationModifier, teleportation) => {
        let newLocation = 0;
        if (teleportation === undefined) {
            const tempLocation = currentPlayer.location + locationModifier;
            newLocation = tempLocation - (tempLocation > 40 ? 40 : 0);
        } else {
            newLocation = locationModifier;
        }

        business(newLocation);
        Meteor.call('player.updateLocation', currentPlayer.id, newLocation);
        Meteor.call('history.add', {createdAt: new Date(), type: 'move', playerID: currentPlayer.id, data: {locationModifier, endPoint: newLocation}});
    }, [players, currentPlayer, boxes]);

    const transaction = useCallback((amount, to) => {
        const id = currentPlayer.id;
        const isBankrupt = Meteor.call('player.updateMoney', id, amount);
        if (to !== undefined) {
            Meteor.call('player.updateMoney', players[to], amount);
        }
        if (isBankrupt) {
            setResultActionProcess('bankrupt');
        }
    }, [players, currentPlayer]);

    const business = useCallback((location) => {
        const box = boxes.find(e => e.id === location);
        
        switch(box.type) {
            case 'corner':
                switch(box.id) {
                    case 1:
                        // Départ
                        break;
                    case 11:
                        // Simple Visite
                        break;
                    case 21:
                        // Parc Gratuit
                        break;
                    case 31:
                        // Va en prison
                        //playerMove(11)
                        break;
                    default:
                        break;
                }
                endTurn();
            case 'property':
            case 'station':
            case 'company':
                // Elle n'appartient à personne
                if (box.owned === -1) {
                    setProgressActionProcess('buyProperty', box.name);
                    Meteor.call('player.updateState', currentPlayer.id, 'buyProperty');
                    handleShowModal();
                    // Affichage du modal de la carte avec les différentes actions
                }
                // Elle appartient à quelqu'un
                if (box.owned >= 0 && !box.mortgaged) {
                    transaction(box.rent, box.owned);
                    Meteor.call('history.add', {createdAt: new Date(), type: 'pay', playerID: currentPlayer.id, data: {to: box.owned, amount: box.rent }});
                    endTurn();
                }
                break;
            case 'community':
            case 'chance':
                setProgressActionProcess(box.type);
                handleShowModal();
                Meteor.call('player.updateState', currentPlayer.id, box.type);
                break;
            case 'tax':
                transaction(-box.taxCost);
                Meteor.call('history.add', {createdAt: new Date(), type: 'money', playerID: currentPlayer.id, data: -box.taxCost});
                endTurn();
                break;
            default:
                break;
        }
    }, [currentPlayer, boxes, cards, handleShowModal, setProgressActionProcess]);

    const buyProperty = useCallback((box) => {
        const playerID = currentPlayer.id;
        const boxID = box.idProperty;
        const data = { name: box.name };
        transaction(-box.propertyCost);
        Meteor.call('player.updateOwn', playerID, boxID);
        Meteor.call('card.updateOwned', boxID, playerID);
        Meteor.call('history.add', {createdAt: new Date(), type: 'purchase', playerID: currentPlayer.id, data});
        handleShowModal();
        setResultActionProcess('buyProperty','bought', box.name);
        endTurn();
    }, [handleShowModal, players, currentPlayer]);

    const notBuyProperty = useCallback((box) => {
        handleShowModal();
        setResultActionProcess('buyProperty','notBought', box.name);
        endTurn();
    }, [handleShowModal, currentPlayer]);

    const handleCards = useCallback((card) => {
        const { type, data } = card.effect;

        if (type === 'money') {
            transaction(data);
        } else if (type === 'teleportation') {
            moveTo(data, true);
        }
        handleShowModal();
        setResultActionProcess('community','resume', card.resume);
        Meteor.call('history.add', {createdAt: new Date(), type, playerID: currentPlayer.id, data});
        Meteor.call('card.updateIndex', card.type);
        endTurn();
    }, [cards, players, currentPlayer]);

    const endTurn = useCallback(() => {
        if (currentPlayer.didDouble) {
            Meteor.call('player.updateState', currentPlayer.id, 'roll');
        } else {
            Meteor.call('player.updateState', currentPlayer.id, 'endTurn');
        }
    }, [players, currentPlayer]);

    const toNextPlayer = useCallback(() => {
        Meteor.call('player.updateState', currentPlayer.id, 'roll');
        Meteor.call('player.updateCurrentPlayer');
        Meteor.call('actions.clear');
    }, [currentPlayer]);

    const boxesRender = useMemo(() => boxes.map((box) =>
        <BoxContainer box={box} key={box.id}>
            {players
            .map((player) => player.location) // Array with location of players only
            .map((e, i) => box.id === e ? i : undefined) // Array with players on this box
            .filter(e => e !== undefined) // Clean Array
            .map((e, i) => // Replace by player's token
                <Token
                    key={e}
                    id={e}
                    color={players[e].color}
                    locationType={box.type}
                    locationSide={box.grid.position}
                    accumulator={i}
                ></Token> 
            )}
        </BoxContainer>)
    , [players, boxes]);

    const historyRender = useMemo(() => {
        if (players.length > 0 && boxes.length > 0) {
            return history.map(e => <HistoryLine players={players} boxes={boxes} key={e['_id']} type={e.type} name={players[e.playerID].name} color={players[e.playerID].color} data={e.data}></HistoryLine>)
        }
    }, [players, history, boxes])

    const actionsRender = useMemo(() => {
        if (Object.keys(actions).length > 0) {
            return [
                actions.result.map((e, i) => <Span block finished={true} key={i} size={1.2} marginY={10}>{e}</Span>),
                actions.inProgress.key !== undefined ? <Span block finished={false} key={'progress'} size={1.2} marginY={10}>{actions.inProgress.message}</Span> : ''
            ];
        }
    }, [actions]);

    const isPlayersLoad = useMemo(() => currentPlayer !== undefined ? currentPlayer : false, [players, currentPlayer]);
    
    return (
        <BoardContainer>
            <ModalComponent
                currentPlayer={currentPlayer}
                boxes={boxes}
                cards={cards}
                showModal={showModal}
                buyProperty={buyProperty}
                notBuyProperty={notBuyProperty}
                handleCards={handleCards}
                handleShowModal={handleShowModal}
                setResultActionProcess={setResultActionProcess}
            ></ModalComponent>
            {boxesRender}
            <BoxCenter>
                <TurnPlayerContainer>
                    <Title style={{ gridArea: 'title', placeSelf: 'center' }} level={3} size={1.5}>C'est au tour de <Span size={1.8} color={currentPlayer ? currentPlayer.color : ''}>{currentPlayer ? currentPlayer.name : ''}</Span></Title>
                    <Process>{actionsRender}</Process>
                    <Dices>
                        <Dice face={dice1}></Dice>
                        <Dice face={dice2}></Dice>
                    </Dices>
                    <Actions>
                        <ActionButton active={isPlayersLoad.state === 'roll'} onClick={() => isPlayersLoad.state === 'roll' ? rollTheDice() : undefined}><Image width={40} height={40} src={`../../../images/dices.png`}></Image></ActionButton>
                        <ActionButton active={isPlayersLoad} onClick={handleShowModal}><Image width={30} height={40} src={`../../../images/property.jpg`}></Image></ActionButton>
                        <ActionButton active={isPlayersLoad.state === 'endTurn'} onClick={() => isPlayersLoad.state === 'endTurn' ? toNextPlayer() : undefined}><Image width={40} height={40} src={`../../../images/endTurn.png`}></Image></ActionButton>
                    </Actions>
                </TurnPlayerContainer>
                <HistoryContainer>{historyRender}</HistoryContainer>
            </BoxCenter>
        </BoardContainer>
    );
};

export default Board;
