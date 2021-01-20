import styled from 'styled-components';

const ActionsContainer = styled.div`
    display: grid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    opacity: ${({hidden}) => hidden ? `0.4` : `1`};
`;

export default ActionsContainer;