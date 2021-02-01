import styled, { css } from 'styled-components';
import Image from './Image';

const ButtonRollTheDice = styled.div`
    border: 1px solid #000;
    margin: 0 5px;
    background-color: rgb(170, 170, 170);
    transition: 0.15s;
    opacity: ${({active}) => active ? '1' : '0.4'};
    
    ${({active}) => active ? css`
    
    cursor: pointer;

    &:hover {
        background-color: rgb(221, 221, 221);
    }

    &:active {
        ${Image} {
            transform: translate(1px, 1px);
        }
    }
    ` : ''}

    z-index: ${({special}) => special ? '1' : 'none'};
`;

export default ButtonRollTheDice;
