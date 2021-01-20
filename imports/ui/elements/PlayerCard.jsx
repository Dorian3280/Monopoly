import styled from 'styled-components';

const PlayerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: ${({ id, currentPlayerID }) =>  id === currentPlayerID ? `#a8a8a8` : `#C3D2D5`};
`;

export default PlayerCard;
