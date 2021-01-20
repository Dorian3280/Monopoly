import React from 'react';

import { Divider } from 'rsuite';

import Grid from '/imports/ui/elements/Grid';
import Image from '/imports/ui/elements/Image';
import Span from '/imports/ui/elements/Span';

const HistoryLine = ({boxes, type, name, color, data}) => {

    let description = '';
    let typeInFrench = '';
    const box = boxes.find(e => e.id === data.endPoint);
    switch(type) {
        case 'move':
            typeInFrench = 'Déplacement';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` avance de ${data.numberOfCases} cases et tombe sur `}<Span weight={'bold'} color={box.color}>{box.name}</Span></>;
            break;
        default:
            break;
    }

    return (
        <>
            <Grid type={'columns'} size={['25px', '20%', '1fr']}>
                <Image width={30} height={30} src={`../../../images/${type}.png`}></Image>
                <div style={{placeSelf: 'center'}}>( {typeInFrench} )</div>
                <div style={{alignSelf: 'center'}}>{description}</div>
            </Grid>
            <Divider />
        </>
    )
};

export default HistoryLine;