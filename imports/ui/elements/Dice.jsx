import styled from 'styled-components';

const position = (number, axe) => {
    const obj = {x: 0, y: 0};

    switch(number) {
        case 1:
            obj.x = -10;
            obj.y = -9;
            break;
        case 2:
            obj.x = -96;
            obj.y = -9;
            break;
        case 3:
            obj.x = -182;
            obj.y = -9;
            break;
        case 4:
            obj.x = -10;
            obj.y = -95;
            break;
        case 5:
            obj.x = -96;
            obj.y = -95;
            break;
        case 6:
            obj.x = -182;
            obj.y = -95;
            break;
        default:
            break;
    }

    return obj[axe]
}

const item = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 10px;

    background-image: url("../../../images/diceFace.jpg");
    background-position: ${({face}) => `${position(face, 'x')}px ${position(face, 'y')}px`};
`;

export default item;
