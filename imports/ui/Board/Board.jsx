import React, { useContext } from 'react';
import styled from 'styled-components';

import { boxes } from '/imports/database/caseBoard';
import SessionContext from '/imports/components/SessionContext';

import Console from '/imports/Console/Console';
import Box from '/imports/ui/Board/Box/Box';
import Token from '/imports/ui/Board/Token';

const Board = ( {className} ) => {

    const { players } = useContext(SessionContext);

    return (
        <div className={className}>
            {players.map((player) => <Token player={player} key={player.id} location={player.location}></Token>)}
            {boxes.map((box) => <Box box={box} key={box.id}></Box>)}
            <Console></Console>
        </div>
    );
};


const StyledBoard = styled(Board)`
    position: relative;
    display: grid;
    grid-template-columns: 112px repeat(9, 75px) 116px;
    grid-template-rows: 113px repeat(9, 75px) 116px;
    grid-gap: 3px;
    height: 938px;
    width: 938px;
    border: 2px solid black;
    background: black;
`;

export default StyledBoard;
