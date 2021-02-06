import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PairModal({isOpen, hidePairs, drink, food}) {

    const foods = food.map(f => {
        return (
            <>
                <p>{f}</p> 
            </>
        )
    })
    
    return (
    <Modal show={isOpen} onHide={hidePairs}>
        <ModalHeader closeButton>
            <ModalTitle>{drink}</ModalTitle>
        </ModalHeader>

        <ModalBody>
            <h5><i>Best Paired with:</i></h5>
            {foods}
        </ModalBody>

        <ModalFooter>
            <Button onClick={hidePairs} variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </ModalFooter>
    </Modal>
    )
}
