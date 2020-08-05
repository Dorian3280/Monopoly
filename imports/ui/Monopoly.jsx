import React from 'react';
import styled from 'styled-components';

import Actions from '/imports/ui/InteractiveStuff/Actions/Actions';
import Board from '/imports/ui/Board/Board';
import Players from '/imports/ui/InteractiveStuff/Players/Players';

const InteractiveStuff = styled.div`
    display: grid;
    grid-template-rows: 20% 80%;
`;

const Monopoly = ( {className} ) => (
        <div className={className}>
            <Board></Board>
            <InteractiveStuff>
                <Actions></Actions>
                <Players></Players>
            </InteractiveStuff>
        </div>
);

const StyledMonopoly = styled(Monopoly)`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 938px 1fr;
`;

export default StyledMonopoly;
