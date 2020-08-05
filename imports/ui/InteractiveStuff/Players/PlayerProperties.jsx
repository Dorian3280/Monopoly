import React from 'react';
import styled from 'styled-components';

import { boxes } from '/imports/database/caseBoard';

import MinProperty from '/imports/ui/InteractiveStuff/Players/MinProperty';

const PlayerProperties = ( {className} ) => {

    return (
        <div className={className}>{
            boxes.map((box) => {
                if (box.idProperty) return (<MinProperty id={box.idProperty} key={box.idProperty}></MinProperty>);
            })}
        </div>
    );
};

const StyledPlayerProperties = styled(PlayerProperties)`
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(4, 50px);
    grid-gap: 3px;
    grid-template-areas: 
                            "a b . . l m n . w x"
                            "c d e . o p q . y z"
                            "f g h . r s t . . ."
                            "i j k . . u v . aa ab";
    justify-content: center;
    align-content: center;
`;

export default StyledPlayerProperties;
