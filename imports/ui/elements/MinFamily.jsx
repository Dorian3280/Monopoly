import styled, { css } from 'styled-components';

const MinFamily = styled.div`
    display: flex;
    justify-content: center;
    width: max-content;
    place-self: center;

    ${({hasFamily, color}) => hasFamily ? css`
        border: 4px solid ${color};
    ` : ''}
`;

export default MinFamily;
