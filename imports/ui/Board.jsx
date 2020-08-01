import styled from 'styled-components';

const item = styled.div`
    display: grid;
    grid-template-columns: 112px repeat(9, 75px) 113px;
    grid-template-rows: 113px repeat(9, 75px) 113px;
    grid-gap: 3px;
    height: 100%;
    width: 100%;
    border: 2px solid black;
    background: black;
`;

export default item;