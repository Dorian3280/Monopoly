import React from 'react';

import PlayersCardContainer from '/imports/ui/elements/PlayersCardContainer';
import PlayerCard from '/imports/ui/elements/PlayerCard';

import PlayerName from '/imports/ui/elements/PlayerName';
import PlayerMoney from '/imports/ui/elements/PlayerMoney';
import PlayerProperties from '/imports/ui/elements/PlayerProperties';
import MinProperty from '/imports/ui/elements/MinProperty';

const PlayersCard = ({boxes, players, currentPlayerID}) => {
    
    return (
        <PlayersCardContainer>{
            players.map((player) =>
                <PlayerCard key={player.id} id={player.id} currentPlayerID={currentPlayerID}>
                    <PlayerName>{player.name}</PlayerName>
                    <PlayerMoney>{player.money} €</PlayerMoney>
                    <PlayerProperties>{
                    boxes
                        .filter(e => Object.keys(e).indexOf('idProperty') !== -1) // Récupère que les cases de propriété
                        .sort((e1, e2) => e1.test > e2.test) // Les tri par ordre croissant
                        .map(box => <MinProperty has={player.own.indexOf(box.idProperty) !== -1} color={box.color} id={box.idProperty} key={box.idProperty}></MinProperty>)
                    }</PlayerProperties>
                </PlayerCard>
            )}
        </PlayersCardContainer>
    );
};

export default PlayersCard;
