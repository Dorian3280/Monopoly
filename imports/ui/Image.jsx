import styled from 'styled-components';

const item = styled.div`
    ${({ side }) => {
    if (side === 'top' || side === 'bottom') {
        return `height`;
    }
    return `width`;
    }}: 45%;
`;

export default item;