import { Meteor } from 'meteor/meteor';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import ModalComponent from '/imports/ui/components/ModalComponent';
import Business from '/imports/ui/components/Business';
import PlayersCard from '/imports/ui/components/PlayersCard';

import Container from '/imports/ui/elements/Container';
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
import Cross from '/imports/ui/elements/Cross';
import House from '/imports/ui/elements/House';
import Hotel from '/imports/ui/elements/Hotel';
import BuildContainer from '/imports/ui/elements/BuildContainer';

import Players from '/imports/api/players/index';
import Database from '/imports/api/database/index';
import History from '/imports/api/actionsHistory/index';
import ActionsProcess from '/imports/api/actionsProcess/index';

const Monopoly = () => {
    const [players, setPlayers] = useState([]);
    const [boxes, setBoxes] = useState([]);
    const [cards, setCards] = useState({});
    const [currentPlayer, setCurrentPlayer] = useState({});

    const [showModal, setShowModal] = useState(false);
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [history, setHistory] = useState([]);
    const [actions, setActions] = useState({});

    const [readyTrackerPlayers, trackerPlayers] = useTracker(() => {
        const publication = Meteor.subscribe('players.findAll');
    
        return [
          publication.ready(),
          Players.find({}).fetch()
        ];
    }, [Players]);

    const [readyTrackerPropertiesCards, trackerPropertiesCards] = useTracker(() => {
        const publication = Meteor.subscribe('cards.getPropertiesCards');
        
        return [
            publication.ready(),
            Database.find({}).fetch()[0]
        ];
    }, [Database]);

    const [readyTrackerCards, trackerCards] = useTracker(() => {
        const publication = Meteor.subscribe('cards.getCards');
    
        return [
          publication.ready(),
          Database.find({}).fetch()[0]
        ];
    }, [Database]);

    const [readyTrackerHistory, trackerHistory] = useTracker(() => {
        const publication = Meteor.subscribe('history.getHistory');
    
        return [
          publication.ready(),
          History.find({}, { sort: { createdAt: -1 }}).fetch()
        ];
    }, [History]);
    

    const [readyTrackerActions, trackerActions] = useTracker(() => {
        const publication = Meteor.subscribe('actions.getActions');
    
        return [
          publication.ready(),
          ActionsProcess.findOne({})
        ];
    }, [ActionsProcess]);
    
    useEffect(() => {
        if (readyTrackerPlayers) {
            const indexCurrentPlayer = trackerPlayers.splice(trackerPlayers.findIndex(e => e.currentPlayerID !== undefined), 1)[0].currentPlayerID;
            setCurrentPlayer(trackerPlayers.find(e => e.id === indexCurrentPlayer));
            setPlayers(trackerPlayers)
        }
    }, [trackerPlayers, readyTrackerPlayers]);

    useEffect(() => {
        if (readyTrackerPropertiesCards) setBoxes(trackerPropertiesCards.boxes)
    }, [trackerPropertiesCards, readyTrackerPropertiesCards]);

    useEffect(() => {
        if (readyTrackerCards) setCards(trackerCards.cards)
    }, [trackerCards, readyTrackerCards]);

    useEffect(() => {
        if (readyTrackerHistory) setHistory(trackerHistory)
    }, [trackerHistory, readyTrackerHistory]);

    useEffect(() => {
        if (readyTrackerActions) setActions(trackerActions)
    }, [readyTrackerActions, trackerActions]);
    

    const setResultActionProcess = useCallback((key, key2, data) => {
        Meteor.call('actions.addResult', key, key2, data)
    }, []);

    const setProgressActionProcess = useCallback((key, data) => {
        Meteor.call('actions.addProgress', key, data)
    }, []);

    const handleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);
   
    useEffect(() => {
        if (currentPlayer.state === 'roll') {
            Meteor.call('actions.addProgress', 'roll')
        }
        if (currentPlayer.state === 'reroll') {
            Meteor.call('actions.addProgress', 'reroll')
        }
        if ((currentPlayer.state === 'buyProperty' || currentPlayer.state === 'community' || currentPlayer.state === 'chance') && !showModal) {
            handleShowModal();
        }
    }, [currentPlayer.state]);

    useEffect(() => {
        if (currentPlayer.state === 'inJail') {
            console.log('prison', currentPlayer.id);
        }
    }, [currentPlayer.id]);


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
                if (isDouble && currentPlayer.countDouble === 2) {
                    Meteor.call('player.resetDouble', currentPlayer.id)
                    getInJail('double');
                }
                if (!isDouble && currentPlayer.didDouble) Meteor.call('player.resetDouble', currentPlayer.id)
                if (isDouble) {
                    Meteor.call('player.didDouble', currentPlayer.id);
                } else {
                    console.log('la')
                    Meteor.call('player.didRoll', currentPlayer.id);
                }
                setResultActionProcess('roll','result', {number, isDouble});
                moveTo(number);
            }
            x++;
        }, 150);
    }, [players, boxes, currentPlayer]);

    // TODO
    // Gérer la téléportation
    const moveTo = useCallback((locationModifier, teleportation, notSalary) => {
        let newLocation = 0;
        if (teleportation === undefined) {
            const tempLocation = currentPlayer.location + locationModifier;
            const gotPaid = tempLocation > 40;
            if (gotPaid) getSalary()
            newLocation = tempLocation - (gotPaid ? 40 : 0);
        } else {
            if ((currentPlayer.location > locationModifier) && (notSalary === undefined)) getSalary()
            newLocation = locationModifier;
        }
        // Déplacer ce bloc dans une nouvelle fonction
        Meteor.call('player.updateLocation', currentPlayer.id, newLocation);
        Meteor.call('history.add', {createdAt: new Date(), type: 'move', playerID: currentPlayer.id, data: {locationModifier, endPoint: newLocation}});
        business(newLocation);
    }, [players, currentPlayer, boxes]);

    const transaction = useCallback((amount, to) => {
        const id = currentPlayer.id;
        const isBankrupt = Meteor.call('player.updateMoney', id, amount);
        if (to !== undefined) {
            if (Array.isArray(to)) {
                for (const id of to) {

                    // Trop spécifique 
                    Meteor.call('player.updateMoney', id, -amount);
                }
            } else {
                Meteor.call('player.updateMoney', players[to].id, Math.abs(amount));
            }
        }
        if (isBankrupt) {
            setResultActionProcess('bankrupt');
        } else {
            endTurn();
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
                        getInJail('box')
                        break;
                    default:
                        break;
                }
                endTurn();
                break;
            case 'property':
            case 'station':
            case 'company':
                // Elle n'appartient à personne
                if (box.owned === -1) {
                    Meteor.call('player.updateState', currentPlayer.id, 'buyProperty');
                    setProgressActionProcess('buyProperty', box.name);
                }
                // Elle appartient à quelqu'un
                if (box.owned >= 0 && !box.mortgaged) {
                    let amount = 0;

                    // Compagnie de distribution
                    if (box.id === 13 || box.id === 29) {
                        amount = (dice1 + dice2) * ((players.find(e => e.id === box.owned).own.filter(e => box.membership.includes(e)).length === 1 ) ? box.rent : box.rentIfOwn2);

                    // Gare
                    } else if (box.id === 6 || box.id === 16 || box.id === 26 || box.id === 36) {
                        amount = box.rent * players.find(e => e.id === box.owned).own.filter(e => box.membership.includes(e)).length;

                    // Carte de propriété
                    } else {
                        if (box.built > 0 && box.build < 5) {
                            amount = box[`house_${box.built}`];
                        } else if (box.build === 5) {
                            amount = box.hotel;
                        } else {
                            amount = box.rent * ((players.find(e => e.id === box.owned).own.filter(e => box.membership.includes(e)).length === box.membership.length) ? 2 : 1);
                        }
                    }

                    /* const amount = ({
                        13: (dice1 + dice2) * box.rent,
                        29: 'Two'
                      })[box.id] ?? box.rent */
                    transaction(-amount, box.owned);
                    Meteor.call('history.add', {createdAt: new Date(), type: 'pay', playerID: currentPlayer.id, data: {to: box.owned, amount }});
                    endTurn();
                }
                break;
            case 'community':
            case 'chance':
                Meteor.call('player.updateState', currentPlayer.id, box.type);
                setProgressActionProcess(box.type);
                break;
            case 'tax':
                transaction(-box.taxCost);
                Meteor.call('history.add', {createdAt: new Date(), type: 'money', playerID: currentPlayer.id, data: -box.taxCost});
                endTurn();
                break;
            default:
                break;
        }
    }, [currentPlayer, boxes, cards, handleShowModal, setProgressActionProcess, dice1 ,dice2]);

    const buyProperty = useCallback((box) => {
        const playerID = currentPlayer.id;
        const boxID = box.id;
        const data = { name: box.name };
        transaction(-box.propertyCost);
        Meteor.call('player.updateOwn', playerID, boxID);
        Meteor.call('property.updateOwned', boxID, playerID);
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
        handleShowModal();
        if (type === 'money') {
            transaction(data);
        } else if (type === 'teleportation') {
            moveTo(data, true);
        } else if (type === 'inJail') {
            getInJail('card')
        } else if (type === 'cardOutOfJail') {
            Meteor.call('player.updateCardOutOfJail', true)
        } else if (type === 'multiple') {
            transaction(data, players.filter(e => e.id !== currentPlayer.id).map(e => e.id));
        }
        setResultActionProcess('community','resume', card.resume);
        Meteor.call('history.add', {createdAt: new Date(), type, playerID: currentPlayer.id, data});
        Meteor.call('card.updateIndex', card.type);
    }, [cards, players, currentPlayer, handleShowModal]);

    const getSalary = useCallback(() => {
        transaction(200)
        Meteor.call('history.add', {createdAt: new Date(), type: "salary", playerID: currentPlayer.id})
    }, [currentPlayer]);

    const getInJail = useCallback((reason) => {
        Meteor.call('player.updateLocation', currentPlayer.id, 11);
        Meteor.call('player.updateState', currentPlayer.id, 'inJail');
        Meteor.call('history.add', {createdAt: new Date(), type: 'inJail', playerID: currentPlayer.id, data: { reason }});
        endTurn();
    }, [currentPlayer]);

    const endTurn = useCallback(() => {
        console.log(currentPlayer)
        if (!currentPlayer.didRoll) {
            console.log('false didroll')
            Meteor.call('player.updateState', currentPlayer.id, 'roll');
        } else if (currentPlayer.didDouble) {
            console.log('diddouble et pas prison')
            Meteor.call('player.updateState', currentPlayer.id, 'reroll');
        } else {
            console.log('tout')
            Meteor.call('player.updateState', currentPlayer.id, 'endTurn');
        }
    }, [currentPlayer]);

    const toNextPlayer = useCallback(() => {
        Meteor.call('player.updateState', currentPlayer.id, 'roll');
        Meteor.call('player.resetRoll', currentPlayer.id);
        Meteor.call('player.updateCurrentPlayer');
        Meteor.call('actions.clear');
    }, [currentPlayer]);

    const propertyBusiness = useCallback((box) => {
        Meteor.call(`property.update${currentPlayer.state.ucFirst()}`, box.id);
        if (currentPlayer.state === 'build') {
            Meteor.call('player.updateMoney', currentPlayer.id, -box.houseCost)
        }
        if (currentPlayer.state === 'sell') {
            Meteor.call('player.updateMoney', currentPlayer.id, box.houseCost/2)
        }
        if (currentPlayer.state === 'mortgage') {
            Meteor.call('player.updateMoney', currentPlayer.id, box.mortgageCost)
        }
        if (currentPlayer.state === 'unmortgage') {
            Meteor.call('player.updateMoney', currentPlayer.id, -(box.mortgageCost + Math.ceil(0.1*box.mortgageCost)))
        }
    }, [currentPlayer.state]);

    const boxesRender = useMemo(() => boxes.map((box) => {
        let isPropertyActive = false;
        
        if (['build', 'sell', 'mortgage', 'unmortgage'].includes(currentPlayer.state) && box.idProperty !== undefined && currentPlayer.own.indexOf(box.id) !== -1) {
            if (currentPlayer.state === 'build' && box.membership.every(e => currentPlayer.own.indexOf(e) && !e.mortgaged) && box.built < 5) {
                isPropertyActive = true;
            }
            if (currentPlayer.state === 'sell' && box.built === 0) {
                isPropertyActive = true;
            }
            if (currentPlayer.state === 'mortgage' && !box.mortgaged && box.built === 0) {
                isPropertyActive = true;
            }
            if (currentPlayer.state === 'unmortgage' && box.mortgaged) {
                isPropertyActive = true;
            }
        }
        
        return (
            <BoxContainer active={isPropertyActive} onClick={() => isPropertyActive ? propertyBusiness(box) : undefined} isMortgaged={box.mortgaged} box={box} key={box.id} player={players !== undefined ? players.find(e => e.id === box.owned) : undefined}>
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
                {box.mortgaged ? <Cross/> : ''}
                <BuildContainer>
                    {box.built !== undefined ? (box.built < 5 ? Array.from(Array(box.built === undefined ? 0 : box.built).keys()).map(e => <House key={e}/>) : <Hotel/>) : ''}
                </BuildContainer>
                
            </BoxContainer>
        )
    }), [currentPlayer, players, boxes, propertyBusiness]);

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
    
    const build = useCallback(() => {
        Meteor.call('player.updateState', currentPlayer.id, 'build')
    }, [currentPlayer.id]);

    const sell = useCallback(() => {
        Meteor.call('player.updateState', currentPlayer.id, 'sell')
    }, [currentPlayer.id]);

    const mortgage = useCallback(() => {
        Meteor.call('player.updateState', currentPlayer.id, 'mortgage')
    }, [currentPlayer.id]);

    const unmortgage = useCallback(() => {
        Meteor.call('player.updateState', currentPlayer.id, 'unmortgage')
    }, [currentPlayer.id]);

    return (
        <Container>
            <BoardContainer businessActive={['build', 'sell', 'mortgage', 'unmortgage'].includes(isPlayersLoad.state)}>
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
                            <ActionButton active={isPlayersLoad.state === 'roll' || isPlayersLoad.state === 'reroll'} onClick={() => (isPlayersLoad.state === 'roll'|| isPlayersLoad.state === 'reroll') ? rollTheDice() : undefined}><Image width={40} height={40} src={`../../../images/dices.png`}></Image></ActionButton>
                            <ActionButton active={isPlayersLoad} onClick={handleShowModal}><Image width={30} height={40} src={`../../../images/property.jpg`}></Image></ActionButton>
                            <ActionButton active={['build', 'sell', 'mortgage', 'unmortgage'].includes(isPlayersLoad.state)} special onClick={() => ['build', 'sell', 'mortgage', 'unmortgage'].includes(isPlayersLoad.state) ? endTurn() : undefined}><Image width={40} height={40} src={`../../../images/done.png`}></Image></ActionButton>
                            <ActionButton active={isPlayersLoad.state === 'endTurn'} onClick={() => isPlayersLoad.state === 'endTurn' ? toNextPlayer() : undefined}><Image width={40} height={40} src={`../../../images/endTurn.png`}></Image></ActionButton>
                        </Actions>
                    </TurnPlayerContainer>
                    <HistoryContainer>{historyRender}</HistoryContainer>
                </BoxCenter>
            </BoardContainer>
            <Business
                currentPlayer={currentPlayer}
                build={build}
                sell={sell}
                mortgage={mortgage}
                unmortgage={unmortgage}
            ></Business>
            <PlayersCard
                players={players}
                boxes={boxes}
            ></PlayersCard>
        </Container>
    )
};

export default Monopoly;
