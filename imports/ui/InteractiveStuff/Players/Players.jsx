import styled from 'styled-components';
import React, { useContext } from 'react';

import SessionContext from '/imports/components/SessionContext';

import PlayerData from '/imports/ui/InteractiveStuff/Players/PlayerData';

const Players = ( {className} ) => {

    const { players, currentPlayer } = useContext(SessionContext);

    return (
        <div className={className}>{
            players.map((player) => 
                <PlayerData
                    player={player}
                    key={player.id}
                    currentPlayerId={currentPlayer.id}
                ></PlayerData>
            )}
        </div>
    );
};

const StyledPlayers = styled(Players)`
    display: grid;
    grid-template-areas: "a b"
                         "c d";
`;

export default StyledPlayers;
