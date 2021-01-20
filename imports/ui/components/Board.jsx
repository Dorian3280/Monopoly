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

const Board = ({players, currentPlayerID, boxes}) => {
    
    const [modalContent, setModalContent] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [actionsProcess, setActionsProcess] = useState({result: [], inProgress: {}});
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [didDouble, setDidDouble] = useState(false);
    const [history, setHistory] = useState([]);
    const [currentPlayerLocation, setCurrentPlayerLocation] = useState(0);

    const actions = useMemo(() => ({
        roll: {
            inProgress : () => "Lancez les dés",
            result: ({number, isDouble}) => `Votre pion avance de ${number} cases${isDouble ? ` avec un double.` : '.'}`
        },
        reroll: {
            inProgress : () => "Vous avez fait un double, relancez les dés",
            result: ({number, isDouble}) => `Votre pion encore avance de ${number} cases${isDouble ? ` avec un double.` : '.'}`
        },
        buyProperty: {
            inProgress: (name) => `Voulez vous achetez ${name} ?`,
            bought: (name) => `Vous avez achetez ${name} !`, // Ajoutez si il a complété une famille
            notBought: (name) => `Vous n'avez pas acheté ${name}...` // Ajoutez si il a complété une famille
        },
        bankrupt: {
            inProgress: () => `Vous n'avez plus d'argent, vous devez vendre quelquechose`,
        }
    }), []);

    const setResultActionProcess = useCallback((key, key2, data) => {
        actionsProcess.result.push(actions[key][key2](data));
        actionsProcess.inProgress = {};
        setActionsProcess(actionsProcess);
    }, []);

    const setProgressActionProcess = useCallback((key, data) => {
        actionsProcess.inProgress.key = key;
        actionsProcess.inProgress.message = actions[key].inProgress(data);
        setActionsProcess(actionsProcess);
    }, []);

    const handleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

    useEffect(() => {
        setProgressActionProcess('roll')
        // Test pour directement acheter
        //setProgressActionProcess('buyProperty', 'truc')
    }, [currentPlayerID]);

    // UseTracker pour récupérer l'emplacement du pion du joueur
    // #####################
    const [readyTrackerPlayerLocation, trackerPlayerLocation] = useTracker(() => {
        const publication = Meteor.subscribe('player.getLocation', currentPlayerID);
        
        return [
          publication.ready(),
          Players.findOne({}, {fields: { location: 1}})
        ];
    }, [Players, currentPlayerID]);

    useEffect(() => {
        if (readyTrackerPlayerLocation) setCurrentPlayerLocation(trackerPlayerLocation.location)
    }, [trackerPlayerLocation, readyTrackerPlayerLocation]);

    useEffect(() => {
        setModalContent(boxes.find(e => e.id === currentPlayerLocation));
    }, [currentPlayerLocation]);
    // #####################

    const [readyTrackerHistory, trackerHistory] = useTracker(() => {
        const publication = Meteor.subscribe('history.get');
    
        return [
          publication.ready(),
          History.find({}, { sort: { createdAt: -1 }}).fetch()
        ];
    }, [History]);
    
    useEffect(() => {
        if (readyTrackerHistory) setHistory(trackerHistory)
    }, [trackerHistory, readyTrackerHistory]);

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
                if (isDouble) setDidDouble(true);
                setResultActionProcess('roll','result', {number, isDouble});
                moveTo(number);
            }
            x++;
        }, 150);
    }, [players, currentPlayerID, boxes]);

    // TODO
    // Gérer la téléportation
    const moveTo = useCallback((numberOfCases/* , teleportation */) => {
        const tempLocation = players[currentPlayerID].location + numberOfCases;
        const newLocation = tempLocation - (tempLocation > 40 ? 40 : 0);
        Meteor.call('player.updateLocation', players[currentPlayerID].id, newLocation);
        Meteor.call('history.add', {createdAt: new Date(), type: 'move', playerID: players[currentPlayerID].id, data: {numberOfCases, endPoint: newLocation}});
        business(newLocation);
    }, [players, currentPlayerID, boxes]);

    const business = useCallback((location) => {
        if (boxes.length !== 0) {
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
            case 'property':
            case 'station':
            case 'company':
                // Elle n'appartient à personne
                if (box.owned === -1) {
                    setProgressActionProcess('buyProperty', box.name);
                    handleShowModal();
                    // Affichage du modal de la carte avec les différentes actions
                }
                // Elle appartient à quelqu'un
                if (box.owned >= 0 && !box.mortgaged) {
                    // payTo(to, amount)
                }
                break;
            case 'community':
                // Test pour savoir si l'ordre des cartes change à l'actualisation
                // Affichage du modal de la carte et effectuer l'action
                break;
            case 'chance':
                // Test pour savoir si l'ordre des cartes change à l'actualisation
                // Affichage du modal de la carte et effectuer l'action
                break;
            case 'tax':
                // La banque aura son id
                // payTo(to, amount)
                break;
        }
    }
    }, [boxes]);

    const buyProperty = useCallback((box) => {
        const playerID = players[currentPlayerID].id;
        const boxID = box.idProperty;
        Meteor.call('player.updateOwn', playerID, boxID);
        Meteor.call('card.updateOwned', boxID, playerID);
        payTo(-1, box.propertyCost);
        handleShowModal();
        setResultActionProcess('buyProperty','bought', box.name);
    }, [handleShowModal, players, currentPlayerID]);

    const payTo = useCallback((to, amount) => {
        const id = players[currentPlayerID].id;
        const isBankrupt = Meteor.call('player.updateMoney', id, -amount);
        if (to > 0) {
            Meteor.call('player.updateMoney', players[to], amount);
        }
        if (isBankrupt) {
            setResultActionProcess('bankrupt');
        }
    }, [players, currentPlayerID]);

    const endTurn = useCallback(() => {

    }, []);

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

    return (
        <BoardContainer>
            <ModalComponent
                showModal={showModal}
                content={modalContent}
                buyProperty={buyProperty}
                actionsProcess={actionsProcess}
                handleShowModal={handleShowModal}
                setResultActionProcess={setResultActionProcess}
            ></ModalComponent>
            {boxesRender}
            <BoxCenter>
                <TurnPlayerContainer>
                    <Title style={{ gridArea: 'title', placeSelf: 'center' }} level={3} size={1.5}>C'est au tour de <Span size={1.8} color={players[currentPlayerID] ? players[currentPlayerID].color : ''}>{players[currentPlayerID] ? players[currentPlayerID].name : ''}</Span></Title>
                    <Process>
                        {actionsProcess.result.map((e, i) => <Span block finished={true} key={i} size={1.2} marginY={10}>{e}</Span>)}
                        {actionsProcess.inProgress.key !== undefined ? <Span block finished={false} size={1.2} marginY={10}>{actionsProcess.inProgress.message}</Span> : ''}
                    </Process>
                    <Dices>
                        <Dice face={dice1}></Dice>
                        <Dice face={dice2}></Dice>
                    </Dices>
                    <Actions>
                        <ActionButton onClick={rollTheDice}><Image width={40} height={40} src={`../../../images/dices.png`}></Image></ActionButton>
                        <ActionButton onClick={handleShowModal}><Image width={30} height={40} src={`../../../images/property.jpg`}></Image></ActionButton>
                        <ActionButton onClick={endTurn}><Image width={40} height={40} src={`../../../images/endTurn.png`}></Image></ActionButton>
                    </Actions>
                </TurnPlayerContainer>
                <HistoryContainer>
                    {history.map(e => <HistoryLine boxes={boxes} key={e['_id']} type={e.type} name={players[e.playerID].name} color={players[e.playerID].color} data={e.data}></HistoryLine>)}
                </HistoryContainer>
            </BoxCenter>
        </BoardContainer>
    );
};

export default Board;
