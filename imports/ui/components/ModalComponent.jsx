import React from 'react';

import { Modal } from 'rsuite';
import { Button } from 'rsuite';
import { Divider } from 'rsuite';

import Span from '/imports/ui/elements/Span';
import Grid from '/imports/ui/elements/Grid';
import Image from '/imports/ui/elements/Image';

const ModalComponent = ({ showModal, content, buyProperty, handleShowModal, actionsProcess, setResultActionProcess }) => {
    const Body = () => {
        if (content !== undefined) {

            // Si une carte de propriété
            if (content.type === 'property') {
                return (
                    <>
                        <Modal.Header style={{background: content.color, padding: '10px', borderRadius: '8px', textAlign: 'center'}}>
                            <Modal.Title style={{color: 'white'}}>{content.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                            <Span weight="bold" center>Loyer € {content.rent}</Span>
                            {[1, 2, 3, 4].map(e =>
                                <Grid key={e} type="columns" size={['60%', '1fr']}>
                                    <Span style={{placeSelf: 'start'}}>Avec {e} Maison</Span>
                                    <Span style={{placeSelf: 'end'}}>€ {content[`house_${e}`]}</Span>
                                </Grid>)}
                                <Grid type="columns" size={['1fr', '1fr']}>
                                    <Span style={{placeSelf: 'start'}}>Avec H&Ocirc;TEL</Span>
                                    <Span style={{placeSelf: 'end'}}>€ {content.hotel}</Span>
                                </Grid>
                            <Divider />
                            <p>Si un joueur possède <Span weight="bold" text="uppercase">tous</Span> les terrains d'un Groupe de Couleur quelqueconque, le loyer des terrains nus de ce groupe est doublé.</p>
                            <Divider />
                            <Grid type="columns" size={['1fr', '40%']}>
                                <Span style={{placeSelf: 'start'}}>Prix des Maisons</Span>
                                <Span style={{placeSelf: 'start'}}>€ {content.houseCost} chacune</Span>
                            </Grid>
                            <Grid type="columns" size={['1fr', '40%']}>
                                <Span style={{placeSelf: 'start'}}>Prix d'un Hôtel</Span>
                                <Span style={{textAlign: 'left'}}>€ {content.houseCost} plus 4 Maisons</Span>
                            </Grid>
                            <Span marginY={15} center size={1}>Valeur Hypothécaire du terrain :<br/><Span weight="bold">€ {content.mortgageCost}</Span></Span>
                        </Modal.Body>
                    </>
                )

            // Si une carte d'une gare
            } else if (content.type === 'station') {
                return (
                    <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                        <Image width={150} height={150} src={`../../../images/station.png`}></Image>
                        <Span text="uppercase" size={1.2} weight="bold" center marginY={10}>{content.name}</Span>
                        {[1, 2, 3, 4].map(e =>
                        <Grid key={e} type="columns" size={['60%', '1fr']}>
                            <Span style={{placeSelf: 'start'}}>{e === 1 ? 'LOYER' : `Si vous avez ${e} Gares`}</Span>
                            <Span style={{placeSelf: 'end'}}>€ {content.rent * e}</Span>
                        </Grid>)}
                        <Span marginY={15} center size={1}>Valeur Hypothécaire du terrain :<br/><Span weight="bold">€ {content.mortgageCost}</Span></Span>
                    </Modal.Body>
                )

            // Si une carte d'une compagnie de distribution
            } else if (content.type === 'company') {
                return (
                    <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                        <Image width={150} height={150} src={`../../../images/${content.namebis}.png`}></Image>
                        <Span text="uppercase" size={1.2} weight="bold" center marginY={10}>{content.name}</Span>
                        <p>Si l'on possède <Span weight="bold" text="uppercase">une</Span> carte de compagnie de Service Public, le loyer est 4 fois le montant indiqué par les dés.</p>
                        <p>Si l'on possède <Span weight="bold" text="uppercase">deux</Span> carte de compagnie de Service Public, le loyer est 10 fois le montant indiqué par les dés.</p>
                        <Span marginY={15} center size={1}>Valeur Hypothécaire du terrain :<br/><Span weight="bold">€ {content.mortgageCost}</Span></Span>
                    </Modal.Body>
                )

            // Si c'est une case d'un coin
            } else if (content.type === 'corner') {
                if (content.id === 1) {
                    return (
                        <Modal.Body>
                            <Image width={250} height={250} src={`../../../images/${content.pseudo}.jpg`}></Image>
                        </Modal.Body>
                    )
                } else if (content.id === 11) {
                    return (
                        <Modal.Body>
                            <Image width={250} height={250} src={`../../../images/${content.pseudo}.jpg`}></Image>
                        </Modal.Body>
                    )
                } else if (content.id === 21) {
                    return (
                        <Modal.Body>
                            <Image width={250} height={250} src={`../../../images/${content.pseudo}.jpg`}></Image>
                        </Modal.Body>
                    )
                } else if (content.id === 31) {
                    return (
                        <Modal.Body>
                            <Image width={250} height={250} src={`../../../images/${content.pseudo}.png`}></Image>
                        </Modal.Body>
                    )
                }

            // Si c'est une case chance ou caise de communauté
            } else if (content.type === 'chance' || content.type === 'community') {
                return (
                    <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                        <Image width={250} src={`../../../images/${content.type}.png`}></Image>
                    </Modal.Body>
                )

            // Si c'est une taxe
            } else if (content.type === 'tax') {
                return (
                    <>
                        <Modal.Header style={{background: content.color, padding: '10px', borderRadius: '8px', textAlign: 'center'}}>
                            <Modal.Title>{content.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{display: 'flex', flexDirection: 'column'}}>
                            <Image width={250} src={`../../../images/${content.pseudo}.png`}></Image>
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
        if (content !== undefined && actionsProcess!== undefined) {
            if (actionsProcess.inProgress.key === 'buyProperty') {
                return (
                    <Modal.Footer>
                        <Button color="green" appearance="primary" onClick={() => buyProperty(content)}>Acheter pour € {content !== undefined ? content.propertyCost : undefined}</Button>
                        <Button color="red" appearance="primary" onClick={() => { handleShowModal(); setResultActionProcess('buyProperty','notBought', content.name)}}>Refuser</Button>
                    </Modal.Footer>
                )
            } else {
                return null;
            }
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