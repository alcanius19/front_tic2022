import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FormularioConfirmar = ({ formulario }) => (
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{formulario.mensaje}</Form.Label>
      <div className="clearfix"></div>
      <Form.Text className="text-muted text-dark">
        {formulario.textoOpcion}
      </Form.Text>
    </Form.Group>
  </Form>
);

FormularioConfirmar.propTypes = {
  formulario: PropTypes.object.isRequired,
  botones: PropTypes.object,
};

export default FormularioConfirmar;
