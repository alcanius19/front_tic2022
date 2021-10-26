import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import useExtraer from "../ganchos/extraerInicio";
import useExtraerDatos from "../ganchos/extraer_venta";
import modelo_tabla from "../tabla/ModeloTablaBuscarProducto";
import Tabla from "../tabla/Tabla";

const FormularioAgregarProducto = ({ formulario }) => {
  const [productoId, setProductoId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [productos, setProductos] = useExtraer("/api/productos");
  const [datosProductos, setDatosProductos] = useState([]);

  const [datosProductoId, setDatosProductoId] = useExtraerDatos({
    ruta: "/api/productos",
    parametro: "",
    items: [],
  });
  const [datosProductoDesc, setDatosProductoDesc] = useExtraerDatos({
    ruta: "/api/productos/descripcion",
    parametro: "",
    items: [],
  });

  useEffect(() => {
    if (productoId !== "") {
      setDescripcion("");
      setDatosProductoId((datosId) => ({
        ...datosId,
        parametro: productoId,
        items: [],
      }));
    } else {
      setDatosProductos(productos);
    }
  }, [productoId]);

  useEffect(() => {
    if (descripcion !== "") {
      setProductoId("");
      setDatosProductoDesc((datosCliente) => ({
        ...datosCliente,
        parametro: descripcion,
        items: [],
      }));
    } else {
      setDatosProductos(productos);
    }
  }, [descripcion]);

  useEffect(() => {
    if (
      datosProductoId?.items &&
      datosProductoId.items.length >= 0 &&
      datosProductoId.items[0]?.res
    ) {
      console.log(datosProductoId);
      setDatosProductos([datosProductoId.items[0].res]);
    }
  }, [datosProductoId.items.length]);
  useEffect(() => {
    if (datosProductoDesc?.items && datosProductoDesc.items.length >= 0) {
      console.log(datosProductoDesc);
      setDatosProductos([...datosProductoDesc.items]);
    }
  }, [datosProductoDesc.items.length]);

  useEffect(() => {
    if (productos.length > 0) {
      setDatosProductos([...productos]);
    }
  }, [productos]);
  const onSeleccion = (filasSeleccionadas) => {
    if (filasSeleccionadas.length > 0) {
      filasSeleccionadas = filasSeleccionadas.map((fila) => ({
        ...fila,
        cantidad: 0,
        total: 0,
      }));
    }
    formulario.setProductosBuscar(filasSeleccionadas);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese el id del producto:</Form.Label>
        <Form.Control
          type="text"
          placeholder={"Ingrese el id..."}
          value={productoId}
          onChange={(e) => setProductoId(e.target.value)}
        />
        <Form.Text className="text-muted">Ingresa el id.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese la descripción del producto:</Form.Label>
        <Form.Control
          type="text"
          placeholder={"Ingrese la descripción..."}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <Form.Text className="text-muted">
          Ingrese la descripción completa.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="vendedor-id">
        <Form.Label>Selecciona el producto:</Form.Label>
        <Form.Select
          value={productoId}
          aria-label="cmbProducto"
          onChange={(e) => setProductoId(e.target.value)}
        >
          <option value={""} defaultValue>
            Selecciona
          </option>
          {productos.length > 0
            ? // eslint-disable-next-line no-unused-vars
              productos.map((producto) => (
                <option key={producto._id} value={producto._id}>
                  {producto.descripcion}
                </option>
              ))
            : null}
        </Form.Select>
      </Form.Group>
      <Tabla
        datos={datosProductos}
        setDatos={setDatosProductos}
        modelo={modelo_tabla}
        modo={"checkbox"}
        metodoSeleccion={onSeleccion}
      />
    </Form>
  );
};

FormularioAgregarProducto.propTypes = {
  formulario: PropTypes.object.isRequired,
};

export default FormularioAgregarProducto;
