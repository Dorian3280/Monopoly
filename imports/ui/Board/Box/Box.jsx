import React from 'react';
import styled from 'styled-components';

import BoxDisplay from '/imports/ui/Board/Box/BoxDisplay';

const Box = ( {className, box} ) => (
        <BoxDisplay className={className} box={box}></BoxDisplay>
);

const SlyledBox = styled(Box)`
    grid-row: ${( {box} ) => box.grid.row};
    grid-column: ${( {box} ) => box.grid.column};
    background: #CDE6D0;
    text-align: center;
    font-size: 8px;
    font-family: 'Oswald', sans-serif;
`;

export default SlyledBox;
