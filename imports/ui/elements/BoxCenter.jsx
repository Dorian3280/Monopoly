import styled from 'styled-components';

const BoxCenter = styled.div`
    grid-row: 2 / 11;
    grid-column: 2 / 11;
    background: #CDE6D0;

    display: grid;
    grid-template-rows: 40% 1fr;
    grid-template-areas: "a" "b";
`;

export default BoxCenter;
