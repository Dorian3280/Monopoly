import React, { useEffect, useState } from 'react';

import { Modal } from 'rsuite';
import { Button } from 'rsuite';
import { Divider } from 'rsuite';

import Span from '/imports/ui/elements/Span';
import Grid from '/imports/ui/elements/Grid';
import Image from '/imports/ui/elements/Image';

const ModalComponent = ({ currentPlayer, cards, boxes, showModal, buyProperty, notBuyProperty, handleCards, handleShowModal }) => {

    const [box, setBox] = useState({});
    const [card, setCard] = useState({});

    useEffect(() => {
        if (Object.keys(currentPlayer).length > 0 && cards !== undefined && boxes !== undefined) {
            setBox(boxes.find(e => e.id === currentPlayer.location))
            if ((currentPlayer.state === 'community') || (currentPlayer.state === 'chance')) {
                const {index, order} = cards[currentPlayer.state];
                setCard(cards[currentPlayer.state].cards[order[index]]);
            }
        }
    }, [currentPlayer, boxes, cards]);

    const Body = () => {
        if (cards !== undefined && boxes !== undefined) {
                // Si une carte de propriété
                if (box.type === 'property') {
                    return (
                        <>
                            <Modal.Header style={{background: box.color, padding: '10px', borderRadius: '8px', textAlign: 'center'}}>
                                <Modal.Title style={{color: 'white'}}>{box.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                                <Span weight="bold" center>Loyer € {box.rent}</Span>
                                {[1, 2, 3, 4].map(e =>
                                    <Grid key={e} type="columns" size={['60%', '1fr']}>
                                        <Span style={{placeSelf: 'start'}}>Avec {e} Maison</Span>
                                        <Span style={{placeSelf: 'end'}}>€ {box[`house_${e}`]}</Span>
                                    </Grid>)}
                                    <Grid type="columns" size={['1fr', '1fr']}>
                                        <Span style={{placeSelf: 'start'}}>Avec H&Ocirc;TEL</Span>
                                        <Span style={{placeSelf: 'end'}}>€ {box.hotel}</Span>
                                    </Grid>
                                <Divider />
                                <p>Si un joueur possède <Span weight="bold" text="uppercase">tous</Span> les terrains d'un Groupe de Couleur quelqueconque, le loyer des terrains nus de ce groupe est doublé.</p>
                                <Divider />
                                <Grid type="columns" size={['1fr', '40%']}>
                                    <Span style={{placeSelf: 'start'}}>Prix des Maisons</Span>
                                    <Span style={{placeSelf: 'start'}}>€ {box.houseCost} chacune</Span>
                                </Grid>
                                <Grid type="columns" size={['1fr', '40%']}>
                                    <Span style={{placeSelf: 'start'}}>Prix d'un Hôtel</Span>
                                    <Span style={{textAlign: 'left'}}>€ {box.houseCost} plus 4 Maisons</Span>
                                </Grid>
                                <Span marginY={15} center size={1}>Valeur Hypothécaire du terrain :<br/><Span weight="bold">€ {box.mortgageCost}</Span></Span>
                            </Modal.Body>
                        </>
                    )

                // Si une carte d'une gare
                } else if (box.type === 'station') {
                    return (
                        <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                            <Image width={150} height={150} src={`../../../images/station.png`}></Image>
                            <Span text="uppercase" size={1.2} weight="bold" center marginY={10}>{box.name}</Span>
                            {[1, 2, 3, 4].map(e =>
                            <Grid key={e} type="columns" size={['60%', '1fr']}>
                                <Span style={{placeSelf: 'start'}}>{e === 1 ? 'LOYER' : `Si vous avez ${e} Gares`}</Span>
                                <Span style={{placeSelf: 'end'}}>€ {box.rent * e}</Span>
                            </Grid>)}
                            <Span marginY={15} center size={1}>Valeur Hypothécaire du terrain :<br/><Span weight="bold">€ {box.mortgageCost}</Span></Span>
                        </Modal.Body>
                    )

                // Si une carte d'une compagnie de distribution
                } else if (box.type === 'company') {
                    return (
                        <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                            <Image width={150} height={150} src={`../../../images/${box.namebis}.png`}></Image>
                            <Span text="uppercase" size={1.2} weight="bold" center marginY={10}>{box.name}</Span>
                            <p>Si l'on possède <Span weight="bold" text="uppercase">une</Span> carte de compagnie de Service Public, le loyer est 4 fois le montant indiqué par les dés.</p>
                            <p>Si l'on possède <Span weight="bold" text="uppercase">deux</Span> carte de compagnie de Service Public, le loyer est 10 fois le montant indiqué par les dés.</p>
                            <Span marginY={15} center size={1}>Valeur Hypothécaire du terrain :<br/><Span weight="bold">€ {box.mortgageCost}</Span></Span>
                        </Modal.Body>
                    )

                // Si c'est une case d'un coin
                } else if (box.type === 'corner') {
                    if (box.id === 1) {
                        return (
                            <Modal.Body>
                                <Image width={250} height={250} src={`../../../images/${box.pseudo}.jpg`}></Image>
                            </Modal.Body>
                        )
                    } else if (box.id === 11) {
                        return (
                            <Modal.Body>
                                <Image width={250} height={250} src={`../../../images/${box.pseudo}.jpg`}></Image>
                            </Modal.Body>
                        )
                    } else if (box.id === 21) {
                        return (
                            <Modal.Body>
                                <Image width={250} height={250} src={`../../../images/${box.pseudo}.jpg`}></Image>
                            </Modal.Body>
                        )
                    } else if (box.id === 31) {
                        return (
                            <Modal.Body>
                                <Image width={250} height={250} src={`../../../images/${box.pseudo}.png`}></Image>
                            </Modal.Body>
                        )
                    }

                // Si c'est une case chance ou caise de communauté
                } else if (box.type === 'chance' || box.type === 'community') {
                    if ((currentPlayer.state === 'community') || (currentPlayer.state === 'chance')) {
                        return (
                            <>
                                <Modal.Header style={{padding: '10px', borderRadius: '8px', textAlign: 'center'}}>
                                    <Modal.Title>{card.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                                    <Span>{card.message}</Span>
                                </Modal.Body>
                            </>
                        )
                    } else {
                        return (
                            <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                                <Image width={250} src={`../../../images/${box.type}.png`}></Image>
                            </Modal.Body>
                        )
                    }
                // Si c'est une taxe
                } else if (box.type === 'tax') {
                    return (
                        <>
                            <Modal.Header style={{background: box.color, padding: '10px', borderRadius: '8px', textAlign: 'center'}}>
                                <Modal.Title>{box.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Span>{box.message}</Span>
                            </Modal.Body>
                        </>
                    )
                } else {
                    return null;
                }
        } else {
            return null;
        }
    };

    const Footer = () => {
        if (currentPlayer.state === 'buyProperty') {
            return (
                <Modal.Footer>
                    <Button color="green" appearance="primary" onClick={() => buyProperty(box)}>Acheter pour € {box !== undefined ? box.propertyCost : undefined}</Button>
                    <Button color="red" appearance="primary" onClick={() => notBuyProperty(box)}>Refuser</Button>
                </Modal.Footer>
            )
        } else if ((currentPlayer.state === 'community') || (currentPlayer.state === 'chance')) {
            return (
                <>
                    <Modal.Footer>
                        <Button color="green" appearance="primary" onClick={() => handleCards(card)}>Ok</Button>
                    </Modal.Footer>
                </>
            )
        } else {
            return null;
        }
    };
    
    return (
        <div className="modal-container">
            <Modal backdrop={true} show={showModal} size="xs" onHide={handleShowModal}>
                <Body/>
                <Footer/>
            </Modal>
        </div>
    )
};

export default ModalComponent;