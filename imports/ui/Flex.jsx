import styled from 'styled-components';

const item = styled.div`
    text-align: center;
    font-size: 0.8rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: ${({ side }) => {
    if (side === 'top') {
        return `column-reverse`;
    }
    if (side === 'right') {
        return `row`;
    }
    if (side === 'bottom') {
        return `column`;
    }
    if (side === 'left') {
        return `row-reverse`;
    }
    }};
`;

export default item;