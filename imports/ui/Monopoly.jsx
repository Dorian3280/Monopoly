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
    const [chanceCards, setChanceCards] = useState([]);
    const [communityChestCards, setCommunityChestCards] = useState([]);
    const [currentPlayerID, setCurrentPlayerID] = useState(0);

    const [readyTrackerPlayers, trackerPlayers] = useTracker(() => {
        const publication = Meteor.subscribe('players.findAll');
    
        return [
          publication.ready(),
          Players.find({}).fetch()
        ];
    }, [Players]);

    useEffect(() => {
        if (readyTrackerPlayers) setPlayers(trackerPlayers)
    }, [trackerPlayers, readyTrackerPlayers]);


    const [readyTrackerDatabase, trackerDatabase] = useTracker(() => {
        const publication = Meteor.subscribe('cards.getPropertiesCards');
    
        return [
          publication.ready(),
          Database.find({}).fetch()[0]
        ];
    }, [Database]);

    useEffect(() => {
        if (readyTrackerDatabase) {
            setBoxes(trackerDatabase.boxes);
            setChanceCards(trackerDatabase.chanceCards);
            setCommunityChestCards(trackerDatabase.communityChestCards);
        }
    }, [trackerDatabase, readyTrackerDatabase]);

    return (
        <Container>
            <Board
                players={players}
                boxes={boxes}
                currentPlayerID={currentPlayerID}
            ></Board>
            <Business></Business>
            <PlayersCard
                players={players}
                boxes={boxes}
                currentPlayerID={currentPlayerID}
            ></PlayersCard>
        </Container>
    )
};

export default Monopoly;
