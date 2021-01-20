import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template: ${({type}) => type === 'columns' ? 'none /' : ''} ${({size}) => size.map((i) => `${i} `)}${({type}) => type === 'rows' ? ' / none' : ''};
    padding: 3px 0;
`;

export default Grid;