import React, { useMemo } from 'react';
import styled from 'styled-components';

import BoxFamily from '/imports/ui/Board/Box/BoxFamily';
import BoxName from '/imports/ui/Board/Box/BoxName';
import Price from '/imports/ui/Board/Box/Price';

const BoxDisplay = ( {className, box} ) => {

    return useMemo(() => {
        if ((box.type === 'property') || (box.type === 'station') || (box.type === 'company'))
            return (
                <div className={className}>
                    <BoxFamily color={box.color} side={box.grid.side}></BoxFamily>
                    <BoxName side={box.grid.side}>{box.name}</BoxName>
                    <Price side={box.grid.side}>€ {box.propertyCost}</Price>
                </div>
            )
        if  (box.type === 'tax') 
            return (
                <div className={className}>
                    <BoxName side={box.grid.side}>{box.name}</BoxName>
                    <Price side={box.grid.side}>€ {box.taxCost}</Price>
                </div>
            )
        if ((box.type === 'chance') || (box.type === 'community') || (box.type === 'corner'))
            return (
                <div className={className}>
                    <BoxName side={box.grid.side}>{box.name}</BoxName>
                </div>
            )

        return null;
    }, []);
}

const StyledBoxDisplay = styled(BoxDisplay)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${({box}) => (box.type === 'corner') ? `113` : `75`}px;
    height: 113px;
    ${({box}) => (box.grid.side === 'top') && `transform: rotate(180deg);`}
    ${({box}) => (box.grid.side === 'left') && `transform: rotate(90deg); transform-origin: 56px 56px;`}
    ${({box}) => (box.grid.side === 'right') && `transform: rotate(270deg); transform-origin: 38px 37px;`}
`;

export default StyledBoxDisplay;
