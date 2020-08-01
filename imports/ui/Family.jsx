import styled from 'styled-components';

const item = styled.div`
    ${( {side} ) => {
    if ((side === 'top') || (side === 'bottom')) {
        return `height`;
    }
    return `width`;
    }}: 20%;
    background: ${({ color }) => color};
    border-${({ side }) => side}: 3px solid black;
`;

export default item;