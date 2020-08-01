import styled from 'styled-components';

const item = styled.div`

    writing-mode: ${({ side }) => {
    if (side === 'right') {
        return `vertical-lr`;
    }
    if (side === 'left') {
        return `vertical-rl`;
    }
    }};

    text-orientation: ${({ side }) => {
    if (side === 'right') {
        return `sideways`;
    }
    if (side === 'left') {
        return `mixed`;
    }
    }};

    ${({ side }) => {
    if (side === 'top') {
        return `transform: rotate(180deg);`;
    }
    }}
    
`;
export default item;