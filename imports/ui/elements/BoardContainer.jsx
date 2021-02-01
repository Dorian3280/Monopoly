import styled, { css}  from 'styled-components';

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

    ${({businessActive}) => businessActive ? css`
        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
        }
    ` : ''}
`;

export default BoardContainer;