import styled, { css } from 'styled-components';

import AnimationBackground from '/imports/ui/Animations/AnimationBackground'

const Action = styled.div`
    width: 230px;
    height: 100px;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1C7C54;
    border-radius: 30px;
    background-position: 100% 100%;
    box-shadow: 0 0 0 3px #92DE34 inset;

    ${({hidden}) => !hidden && 
    css`
    cursor: pointer;
    :hover {
        background-image: linear-gradient(
          145deg,
          transparent 10%,
          #92DE34 10% 20%,
          transparent 20% 30%,
          #92DE34 30% 40%,
          transparent 40% 50%,
          #92DE34 50% 60%,
          transparent 60% 70%,
          #92DE34 70% 80%,
          transparent 80% 90%,
          #92DE34 90% 100%
        );
        animation: ${AnimationBackground} 3s linear infinite;
    }
    `
    }
`;

export default Action;
