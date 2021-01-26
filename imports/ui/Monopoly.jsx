import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import Container from '/imports/ui/elements/Container';
import Board from '/imports/ui/components/Board';
import Business from '/imports/ui/components/Business';
import PlayersCard from '/imports/ui/components/PlayersCard';

import Players from '/imports/api/players/index';
import Database from '/imports/api/database/index';

const Monopoly = () => {
    const [players, setPlayers] = useState([]);
    const [boxes, setBoxes] = useState([]);
    const [cards, setCards] = useState({});
    const [currentPlayer, setCurrentPlayer] = useState({});

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

    return (
        <Container>
            <Board
                players={players}
                currentPlayer={currentPlayer}
                boxes={boxes}
                cards={cards}
            ></Board>
            <Business></Business>
            <PlayersCard
                players={players}
                boxes={boxes}
            ></PlayersCard>
        </Container>
    )
};

export default Monopoly;
