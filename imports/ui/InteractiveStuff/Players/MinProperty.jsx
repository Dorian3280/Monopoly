import styled from 'styled-components';

const StyledMinProperty = styled.div`
    border: 2px solid black;
    grid-area: ${({ id }) => {
        if (id > 26) {
            return `${String.fromCharCode(96 + Math.floor(id/26))}${String.fromCharCode( 96 + (id - 26) )}`;
        }
        return String.fromCharCode( 96 + id );
    }};
`;

export default StyledMinProperty;
