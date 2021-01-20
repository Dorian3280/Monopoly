import styled from 'styled-components';

const PlayerProperties = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(4, 45px);
    grid-gap: 3px;
    grid-template-areas: 
                            "a b . . l m n . w x"
                            "c d e . o p q . y z"
                            "f g h . r s t . . ."
                            "i j k . . u v . aa ab";
    justify-content: center;
    align-content: center;
`;

export default PlayerProperties;
