import styled from 'styled-components';

const item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75px;
    height: 113px;
    ${({side}) => side === 'top' ? `transform: rotate(180deg);` : ''}
    ${({side}) => side === 'left' ? `transform: rotate(90deg); transform-origin: 56px 56px;` : ''}
    ${({side}) => side === 'right' ? `transform: rotate(270deg); transform-origin: 38px 37px;` : ''}
`;

export default item;