import styled from 'styled-components';

const div = (props) => {
    console.log(props);
}
const item = styled.div`
    grid-row: ${( {row} ) => row};
    grid-column: ${( {column} ) => column};
    background: #CDE6D0;
    text-align: center;
    font-size: 10px;
`;

export default item;