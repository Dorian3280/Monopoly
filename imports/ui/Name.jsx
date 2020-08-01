import styled from 'styled-components';

const item = styled.div`
    padding: 1em;

    ${({ side, special }) => {
    if (side === 'top' || side === 'bottom') {
    return `
        width: 100%;
        height: ${special ? `40` : `25`}%;
    `;
    }
    return `
        height: 100%;
        width: ${special ? `40` : `25`}%;
    `;
    }}`

export default item;