import styled from 'styled-components';

const item = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50px;
    left: 50px;
    border-radius: 50%;
    background: ${({player}) => player.color};
`;

export default item;
