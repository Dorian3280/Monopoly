import styled from 'styled-components';

const TurnPlayerContainer = styled.div`
    grid-area: a;

    display: grid;
    grid-template-areas:    "title title"
                            "process dices"
                            "process actions";
    grid-template-columns: 70% 1fr;
    grid-template-rows: 20% 40% 40%;
    align-items: center;
`;

export default TurnPlayerContainer;