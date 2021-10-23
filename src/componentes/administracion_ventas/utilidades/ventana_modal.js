import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const VentanaModal = ({
  abrir,
  manejarCierre,
  titulo,
  formulario,
  botones,
}) => {
  return (
    <Modal size={"xl"} show={abrir} onHide={manejarCierre}>
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{formulario}</Modal.Body>
      <Modal.Footer>
        {botones &&
          Object.keys(botones).map((llave) => {
            return (
              <Button variant="dark" key={v4()} onClick={botones[llave].click}>
                {botones[llave].nombre}
              </Button>
            );
          })}
        <Button variant="secondary" onClick={manejarCierre}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

VentanaModal.propTypes = {
  abrir: PropTypes.bool.isRequired,
  manejarCierre: PropTypes.func.isRequired,
  titulo: PropTypes.string.isRequired,
  formulario: PropTypes.object.isRequired,
  botones: PropTypes.object,
};

export default VentanaModal;
