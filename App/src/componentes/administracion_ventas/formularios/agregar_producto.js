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
  const [cargando, setCargando] = useState(false);

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
    if (productos.length > 0) {
      setDatosProductos([...productos]);
      setCargando(false);
    } else {
      setCargando(true);
    }
  }, [productos.length]);

  useEffect(() => {
    if (productoId !== "") {
      setDescripcion("");
      setDatosProductoId((datosId) => ({
        ...datosId,
        parametro: productoId,
        items: [],
      }));
      setCargando(true);
    }
    return () => {
      if (datosProductos.length == 0 || productoId !== "")
        setDatosProductos(productos);
    };
  }, [productoId]);

  useEffect(() => {
    if (descripcion !== "") {
      setProductoId("");
      setDatosProductoDesc((datosCliente) => ({
        ...datosCliente,
        parametro: encodeURIComponent(descripcion.trim()),
        items: [],
      }));
      setCargando(true);
    }
    return () => {
      if (datosProductos.length == 0 || descripcion !== "")
        setDatosProductos(productos);
    };
  }, [descripcion]);

  useEffect(() => {
    console.log(datosProductoId);
    if (
      productoId !== "" &&
      datosProductoId?.items.length >= 0 &&
      datosProductoId.parametro === ""
    ) {
      console.log(datosProductoId);
      if (datosProductoId.items[0]?.res)
        setDatosProductos([datosProductoId.items[0].res]);
      else setDatosProductos([]);
      setCargando(false);
    }
    return () => {
      setDatosProductos([]);
    };
  }, [datosProductoId.items]);

  useEffect(() => {
    if (
      descripcion !== "" &&
      datosProductoDesc?.items.length >= 0 &&
      datosProductoDesc.parametro === ""
    ) {
      console.log(datosProductoDesc);
      setDatosProductos([...datosProductoDesc.items]);
      setCargando(false);
    }
    return () => {
      setDatosProductos([]);
    };
  }, [datosProductoDesc.items]);

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
          readOnly={cargando}
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
          readOnly={cargando}
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
          disabled={cargando}
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
        cargador={[cargando, setCargando]}
      />
    </Form>
  );
};

FormularioAgregarProducto.propTypes = {
  formulario: PropTypes.object.isRequired,
};

export default FormularioAgregarProducto;
