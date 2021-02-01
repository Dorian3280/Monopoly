import React, { useMemo } from 'react';

import styled from 'styled-components';

import MinFamily from '/imports/ui/elements/MinFamily';
import MinProperty from '/imports/ui/elements/MinProperty';

const playerProperties = ({boxes, player, className}) => {

    const propertiesRender = useMemo(() => {
        if (boxes.length > 0 ) {
            const array = [];

            boxes = boxes
            .filter(e => Object.keys(e).indexOf('idProperty') !== -1) // Récupère que les cases de propriété
            .sort((e1, e2) => e1.idProperty > e2.idProperty) // Les tri par ordre croissant

            while (boxes.length !== 0) {
                let family = [];
                let familyColor = boxes[0].color;
                boxes[0].membership.forEach(() => {
                    box = boxes.shift();
                    family.push({box, has: player.own.indexOf(box.id) !== -1})
                });
                array.push({family, hasFamily: family.every(e => e.has), familyColor});
            }

            return array.map(({family, hasFamily, familyColor}, i) => (
                    <MinFamily key={i} hasFamily={hasFamily} color={familyColor}>
                        {family.map(({box, has}, i) => <MinProperty has={has} hasFamily={hasFamily} color={box.color} id={i+1} key={box.id}></MinProperty>)}
                    </MinFamily>
                )
            );
        }
    }, [boxes]);

    return (
        <div className={className}>
            {propertiesRender}
        </div>
    )
};


const styledPlayerProperties = styled(playerProperties)`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    row-gap: 7px;
    column-gap: 5px;
`;

export default styledPlayerProperties;
