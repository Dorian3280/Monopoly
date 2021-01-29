import React from 'react';

import PlayersCardContainer from '/imports/ui/elements/PlayersCardContainer';
import PlayerCard from '/imports/ui/elements/PlayerCard';

import PlayerName from '/imports/ui/elements/PlayerName';
import PlayerMoney from '/imports/ui/elements/PlayerMoney';
import PlayerProperties from '/imports/ui/elements/PlayerProperties';

const PlayersCard = ({boxes, players}) => {
    
    return (
        <PlayersCardContainer>{
            players.map((player) =>
                <PlayerCard key={player.id} id={player.id} currentPlayerID={players.currentPlayerID}>
                    <PlayerName>{player.name}</PlayerName>
                    <PlayerMoney>{player.money} €</PlayerMoney>
                    <PlayerProperties boxes={boxes} player={player}></PlayerProperties>
                </PlayerCard>
            )}
        </PlayersCardContainer>
    );
};

export default PlayersCard;
