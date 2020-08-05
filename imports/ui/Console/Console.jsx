import styled from 'styled-components';

const Console = ( {className} ) => {

    return (
        <div className={className}>
            <ActionsTurn></ActionsTurn>
            <ActionsTurn></ActionsTurn>
        </div>
    );
};

const StyledConsole = styled(Console)`
    grid-row: 2 / 11;
    grid-column: 2 / 11;
    background: #CDE6D0;
    display: grid;
    grid-template-areas: "a a" "b c";
    grid-template-rows: 40% 1fr;
`;

export default StyledConsole;