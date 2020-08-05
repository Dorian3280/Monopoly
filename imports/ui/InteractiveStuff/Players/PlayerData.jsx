import React from 'react';
import styled from 'styled-components';

import PlayerName from '/imports/ui/InteractiveStuff/Players/PlayerName';
import PlayerMoney from '/imports/ui/InteractiveStuff/Players/PlayerMoney';
import PlayerProperties from '/imports/ui/InteractiveStuff/Players/PlayerProperties';

const PlayerData = ( {className, player} ) => {

    return (
        <div className={className}>
            <PlayerName>{player.name}</PlayerName>
            <PlayerMoney>{player.money}</PlayerMoney>
            <PlayerProperties></PlayerProperties>
        </div>
    )
}

const StyledPlayerData = styled(PlayerData)`
    grid-area: ${({ player }) => String.fromCharCode( 96 + player.id )};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: ${({ player, currentPlayerId }) =>  player.id === currentPlayerId ? `#FDCA40` : `#C3D2D5`};
`;

export default StyledPlayerData;
