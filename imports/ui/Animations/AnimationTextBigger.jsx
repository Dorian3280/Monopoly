import styled from 'styled-components';

const AnimationTextBigger = styled.span`

    @keyframes bigger {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
    }
`;

export default AnimationTextBigger;