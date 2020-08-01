import styled from 'styled-components';

const item = styled.div`
    display: grid;
    grid-template-columns: 1.5fr repeat(9, 1fr) 1.5fr;
    grid-template-rows: 1.5fr repeat(9, 1fr) 1.5fr;
    grid-gap: 3px;
    height: 100%;
    width: 100%;
    border: 2px solid black;
    background: black;
`;

export default item;