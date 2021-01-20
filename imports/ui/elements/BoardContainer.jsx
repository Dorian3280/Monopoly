import styled from 'styled-components';

const BoardContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 113px repeat(9, 75px) 113px;
    grid-template-rows: 113px repeat(9, 75px) 113px;
    grid-gap: 3px;
    grid-column: 1 / 2;
    grid-row: 1;
    height: 938px;
    width: 938px;
    border: 2px solid black;
    background: black;
    font-family: 'Helvetica', sans-serif;
`;

export default BoardContainer;