import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import BoxFamily from '/imports/ui/elements/BoxFamily';
import BoxName from '/imports/ui/elements/BoxName';
import Price from '/imports/ui/elements/Price';
import Flex from '/imports/ui/elements/Flex';

const Box = ( {className, box, children, onClick} ) => {
    
    const Component =  useMemo(() => {
        if ((box.type === 'property') || (box.type === 'station') || (box.type === 'company'))
            return (
                <>
                    <BoxFamily color={box.color}></BoxFamily>
                    <BoxName>{box.name}</BoxName>
                    <Price>€ {box.propertyCost}</Price>
                </>
            )
        if  (box.type === 'tax') 
            return (
                <>
                    <BoxName>{box.name}</BoxName>
                    <Price>€ {box.taxCost}</Price>
                </>
            )
        if ((box.type === 'chance') || (box.type === 'community'))
            return (
                <>
                    <BoxName>{box.name}</BoxName>
                </>
            )
        if (box.type === 'corner')
            return (
                <>
                    <Flex jcc="center" aic="center">{box.name}</Flex>
                </>
            )
        return null;
    }, []);

    return <div className={className} onClick={onClick}>{Component}{children}</div>;
}

const BoxContainer = styled(Box)`
    grid-row: ${({ box }) => box.grid.row};
    grid-column: ${({ box }) => box.grid.column};
    background: #CDE6D0;
    text-align: center;
    font-size: 0.8rem;
    font-family: 'Oswald';
    position: relative;
    padding-bottom: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${({box}) => (box.type === 'corner') ? `113` : `75`}px;
    height: 113px;
    
    ${({box}) => (box.grid.position === 'top') && `transform: rotate(180deg);`}
    ${({box}) => (box.grid.position === 'left') && `transform: rotate(90deg); transform-origin: 56px 56px;`}
    ${({box}) => (box.grid.position === 'right') && `transform: rotate(270deg); transform-origin: 38px 37px;`}
    
    ${({player}) => player ? css`
        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 8px;
            background: ${player.color};
            position: absolute;
            top: -11px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    ` : ''}

    ${({active}) => active ? css`
        z-index: 1;
        cursor: pointer;
    ` : ''}
`;

export default BoxContainer;
