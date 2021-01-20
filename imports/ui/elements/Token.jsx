import styled from 'styled-components';

const position = (locationType, locationSide, accumulator, where) => {
    const obj = {top: 0, left: 0};
    if (locationType === 'corner') {
        obj.top = 30;
        obj.left = 30;
    } else {
        switch(locationSide) {
            case 'top':
                obj.top = 40;
                obj.left = 15;
                break;
            case 'right':
                obj.top = 40;
                obj.left = 15;
                break;
            case 'bottom':
                obj.top = 30;
                obj.left = 15;
                break;
            case 'left':
                obj.top = 30;
                obj.left = 15;
                break;
        }
    }
    obj.left += (8 * accumulator);
    return obj[where];
}

const Token = styled.div`
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    position: absolute;
    top: ${({locationType, locationSide, accumulator}) => position(locationType, locationSide, accumulator, 'top')}%;
    left: ${({locationType, locationSide, accumulator}) => position(locationType, locationSide, accumulator, 'left')}%;
    border-radius: 50%;
    background: ${({color}) => color};
    transition: 1s;
    z-index: 2;
`;

export default Token;
