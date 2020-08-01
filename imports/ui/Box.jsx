import styled from 'styled-components';

const div = (props) => {
    console.log(props);
}
const item = styled.div`
    grid-row: ${( {row} ) => row};
    grid-column: ${( {column} ) => column};
    background: #CDE6D0;
`;

export default item;