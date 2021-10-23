import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import Tabla from "../tabla/Tabla";
import modelo_tabla from "../tabla/ModeloTablaBuscarVenta";
import useExtraerDatos from "../ganchos/extraer_venta";
import useExtraer from "../ganchos/extraerInicio";

// eslint-disable-next-line no-unused-vars
const FormularioBuscarVenta = ({ formulario }) => {
  // eslint-disable-next-line no-unused-vars
  const [usuarios, setUsuarios] = useExtraer("/api/usuarios");
  // eslint-disable-next-line no-unused-vars
  const [ventas, setVentas] = useExtraer("/api/ventas");
  const [clientes, setClientes] = useState([]);

  const [datosId, setDatosId] = useExtraerDatos({
    ruta: "/api/ventas/codigo",
    parametro: "",
    items: [],
  });
  const [datosCliente, setDatosCliente] = useExtraerDatos({
    ruta: "/api/ventas/cedula",
    parametro: "",
    items: [],
  });
  const [datosVendedor, setDatosVendedor] = useExtraerDatos({
    ruta: "/api/ventas/idvendedor",
    parametro: "",
    items: [],
  });
  const [datosVentas, setDatosVentas] = useState([]);
  const [id, setId] = useState("");
  const [cliente, setCliente] = useState("");
  const [vendedorId, setVendedorId] = useState("");

  useEffect(() => {
    if (ventas.length > 0) {
      setClientes((_clientes) => [
        ..._clientes,
        ...ventas.map((venta) => ({
          nombre: venta.cliente,
          cedula: venta.cedula,
        })),
      ]);
      setDatosVentas(ventas);
    }
  }, [ventas.length]);

  useEffect(() => {
    if (id !== "") {
      setCliente(0);
      setVendedorId("0");
      setDatosId((datosId) => ({
        ...datosId,
        parametro: id,
        items: [],
      }));
    }
  }, [id]);

  useEffect(() => {
    if (cliente != 0) {
      setId("");
      setVendedorId("0");
      setDatosCliente((datosCliente) => ({
        ...datosCliente,
        parametro: cliente,
        items: [],
      }));
    }
  }, [cliente]);

  useEffect(() => {
    if (vendedorId !== "0") {
      setId("");
      setCliente(0);
      setDatosVendedor((datosVendedor) => ({
        ...datosVendedor,
        parametro: vendedorId,
        items: [],
      }));
    }
  }, [vendedorId]);

  useEffect(() => {
    if (datosId?.items && datosId.items.length >= 0) {
      console.log(datosId);
      setDatosVentas([...datosId.items]);
    }
  }, [datosId.items.length]);
  useEffect(() => {
    if (datosVendedor?.items && datosVendedor.items.length >= 0) {
      console.log(datosVendedor);
      setDatosVentas([...datosVendedor.items]);
    }
  }, [datosVendedor.items.length]);
  useEffect(() => {
    if (datosCliente?.items && datosCliente.items.length >= 0) {
      console.log(datosCliente);
      setDatosVentas([...datosCliente.items]);
    }
  }, [datosCliente.items.length]);
  useEffect(() => {
    if (datosVentas.length > 0) {
      console.log(JSON.stringify(datosVentas));
    }
  }, [datosVentas]);

  const onSeleccion = (filasSeleccionadas) => {
    formulario.setVentaBuscar(filasSeleccionadas);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="id-cliente">
        <Form.Label>Ingrese el Id:</Form.Label>
        <Form.Control
          type="text"
          placeholder={"Ingrese el id..."}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Form.Text className="text-muted">Ingresa el id.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="vendedor-id">
        <Form.Label>Selecciona el vendedor:</Form.Label>
        <Form.Select
          value={vendedorId}
          aria-label="cmbVendedor"
          onChange={(e) => setVendedorId(e.target.value)}
        >
          <option value={"0"} defaultValue>
            Selecciona
          </option>
          {usuarios.length > 0
            ? // eslint-disable-next-line no-unused-vars
              usuarios
                .filter(
                  (usuario) =>
                    usuario.rol === "administrador" ||
                    usuario.rol === "vendedor"
                )
                .map((vendedor) => (
                  <option key={vendedor._id} value={vendedor._id}>
                    {vendedor.nombre}
                  </option>
                ))
            : null}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="cliente-id">
        <Form.Label>Selecciona el cliente:</Form.Label>
        <Form.Select
          value={cliente}
          aria-label="cmbCliente"
          onChange={(e) => setCliente(e.target.value)}
        >
          <option value={0} defaultValue>
            Selecciona
          </option>
          {clientes.length > 0
            ? // eslint-disable-next-line no-unused-vars
              clientes.map((_cliente, i) => (
                <option key={_cliente.cedula} value={_cliente.cedula}>
                  {_cliente.nombre}
                </option>
              ))
            : null}
        </Form.Select>
      </Form.Group>
      <Tabla
        datos={datosVentas}
        setDatos={setDatosVentas}
        modelo={modelo_tabla}
        modo={"radio"}
        metodoSeleccion={onSeleccion}
      />
    </Form>
  );
};

FormularioBuscarVenta.propTypes = {
  formulario: PropTypes.object.isRequired,
};

export default FormularioBuscarVenta;
