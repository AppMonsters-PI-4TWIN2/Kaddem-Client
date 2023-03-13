import React from "react";
import { Modal, Button } from "react-bootstrap";

const BannedModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Accès interdit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Vous avez été banni. Vous ne pouvez pas accéder à ce site.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BannedModal;
