import styled from 'styled-components';

const MinProperty = styled.div`
    background: ${({has, color}) => has ? color : ''};
    width: 30px;
    height: 45px;

    border: 2px solid black;
    
    &:not(:last-child) {
        margin-right: 3px;
    }
`;

export default MinProperty;
