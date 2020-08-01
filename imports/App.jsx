import React, { Fragment } from 'react';

import { boxes } from './database/caseBoard';

import Container from './ui/Container';
import BoardContainer from './ui/BoardContainer';
import Board from './ui/Board';
import BoardCenter from './ui/BoardCenter';
import Box from './ui/Box';
import Flex from './ui/Flex';
import Family from './ui/Family';
import Name from './ui/Name';
import Price from './ui/Price';
import Image from './ui/Image';
import TextOrientation from './ui/TextOrientation';

const boxesRender = [];

boxes.forEach((box) => {
    boxesRender.push(
        <Box 
            id={box.id}
            row={box.grid.row}
            column={box.grid.column}
            key={box.id}
        >
            <Flex side={box.grid.side}>
            { ((box.type === 'property') || (box.type === 'station') || (box.type === 'company')) ? 
                <Fragment>
                    <Family color={box.color} side={box.grid.side}></Family>
                    <Name side={box.grid.side}><TextOrientation side={box.grid.side}>ap</TextOrientation></Name>
                    <Image side={box.grid.side}></Image>
                    <Price side={box.grid.side}><TextOrientation side={box.grid.side}>€ {box.propertyCost}</TextOrientation></Price>
                </Fragment> : ''}
            </Flex>
        </Box>
    )
});

const App = () => (
  <Container>
      <BoardContainer>
        <Board>
            {boxesRender}
            <BoardCenter></BoardCenter>
        </Board>
      </BoardContainer>
  </Container>
);

export default App;
