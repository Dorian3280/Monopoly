import React from 'react';

import { Divider } from 'rsuite';

import Grid from '/imports/ui/elements/Grid';
import Image from '/imports/ui/elements/Image';
import Span from '/imports/ui/elements/Span';

const HistoryLine = ({players, boxes, type, name, color, data}) => {

    let description = '';
    let typeInFrench = '';
    let box = {};
    switch(type) {
        case 'move':
            box = boxes.find(e => e.id === data.endPoint);
            typeInFrench = 'Déplacement';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` avance de ${data.locationModifier} cases et tombe sur `}<Span weight={'bold'} color={box.color}>{box.name}</Span></>;
            break;
        case 'teleportation':
            box = boxes.find(e => e.id === data);
            typeInFrench = 'Arrêt';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` se déplace jusqu'à `}<Span weight={'bold'} color={box.color}>{box.name}</Span></>;
            break;
        case 'money':
            typeInFrench = data > 0 ? 'Gain' : 'Perte';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` a ${data > 0 ? 'gagné' : 'perdu'} ${Math.abs(data)} €`}</>;
            break;
        case 'purchase':
            typeInFrench = 'Achat';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` a acheté ${data.name}`}</>;
            break;
        case 'pay':
            typeInFrench = 'Paiement';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` a payé à ${players[data.to].name} pour un montant de ${data.amount} €`}</>;
            break;
        case 'salary':
            typeInFrench = 'Salaire';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` a reçu 200 € de salaire`}</>;
            break;
        case 'inJail':
            typeInFrench = 'Prison';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` va en prison`}</>;
            break;
        case 'outOfJail':
            typeInFrench = 'Liberté';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` sort de prison`}</>;
            break;
        case 'cardOutOfJail':
            typeInFrench = 'Grâce';
            description = <><Span weight={'bold'} color={color}>{name}</Span>{` a reçu la carte "Libéré de prison"`}</>;
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