import React from 'react';

import PlayersCardContainer from '/imports/ui/elements/PlayersCardContainer';
import PlayerCard from '/imports/ui/elements/PlayerCard';

import PlayerName from '/imports/ui/elements/PlayerName';
import PlayerMoney from '/imports/ui/elements/PlayerMoney';
import PlayerProperties from '/imports/ui/elements/PlayerProperties';
import MinProperty from '/imports/ui/elements/MinProperty';

const PlayersCard = ({boxes, players}) => {
    
    return (
        <PlayersCardContainer>{
            players.map((player) =>
                <PlayerCard key={player.id} id={player.id} currentPlayerID={players.currentPlayerID}>
                    <PlayerName>{player.name}</PlayerName>
                    <PlayerMoney>{player.money} €</PlayerMoney>
                    <PlayerProperties>{
                    boxes
                        .filter(e => Object.keys(e).indexOf('idProperty') !== -1) // Récupère que les cases de propriété
                        .sort((e1, e2) => e1.idProperty > e2.idProperty) // Les tri par ordre croissant
                        .map((box, i) => <MinProperty has={player.own.indexOf(box.id) !== -1} color={box.color} id={i+1} key={box.id}></MinProperty>)
                    }</PlayerProperties>
                </PlayerCard>
            )}
        </PlayersCardContainer>
    );
};

export default PlayersCard;
