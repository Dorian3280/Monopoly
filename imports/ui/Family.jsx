import styled from 'styled-components';

const item = styled.div`
    
    width: 100%;
    height: 20%;
    background: ${({ color }) => color};
    border-bottom: 3px solid black;
`;

export default item;