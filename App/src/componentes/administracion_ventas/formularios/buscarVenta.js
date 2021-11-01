import React, { useEffect, useState, useRef } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import Tabla from "../tabla/Tabla";
import modelo_tabla from "../tabla/ModeloTablaBuscarVenta";
import useExtraerDatos from "../ganchos/extraer_venta";
import useExtraer from "../ganchos/extraerInicio";
import { v4 } from "uuid";

// eslint-disable-next-line no-unused-vars
const FormularioBuscarVenta = ({ formulario }) => {
  // eslint-disable-next-line no-unused-vars
  const renderInicial = useRef(true);
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
  const [cliente, setCliente] = useState("-1");
  const [vendedorId, setVendedorId] = useState("-1");
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (ventas.length > 0) {
      setClientes([
        ...ventas.map((venta) => ({
          nombre: venta.cliente,
          cedula: venta.cedula,
        })),
      ]);
      setDatosVentas(ventas);
      setCargando(false);
    } else {
      setCargando(true);
    }
  }, [ventas.length]);

  useEffect(() => {
    if (id !== "") {
      if (cliente !== "-1") setCliente("-1");
      if (vendedorId !== "-1") setVendedorId("-1");
      setDatosId((datosId) => ({
        ...datosId,
        parametro: id,
        items: [],
      }));
      setCargando(true);
    }
    return () => {
      if (datosVentas.length == 0 || id !== "") setDatosVentas(ventas);
    };
  }, [id]);

  useEffect(() => {
    if (cliente !== "-1") {
      if (id !== "") setId("");
      if (vendedorId !== "-1") setVendedorId("-1");
      setDatosCliente((datosCliente) => ({
        ...datosCliente,
        parametro: cliente,
        items: [],
      }));
      setCargando(true);
    }
    return () => {
      if (datosVentas.length == 0 || cliente !== "-1") setDatosVentas(ventas);
    };
  }, [cliente]);

  useEffect(() => {
    if (vendedorId !== "-1") {
      if (id !== "") setId("");
      if (cliente !== "-1") setCliente("-1");
      setDatosVendedor((datosVendedor) => ({
        ...datosVendedor,
        parametro: vendedorId,
        items: [],
      }));
      setCargando(true);
    }
    return () => {
      if (datosVentas.length == 0 || vendedorId !== "-1")
        setDatosVentas(ventas);
    };
  }, [vendedorId]);

  useEffect(() => {
    if (id !== "" && datosId?.items.length >= 0 && datosId.parametro === "") {
      console.log(datosId);
      setDatosVentas([...datosId.items]);
      setCargando(false);
    }
    return () => {
      setDatosVentas([]);
    };
  }, [datosId.items]);

  useEffect(() => {
    if (
      cliente !== "-1" &&
      datosCliente?.items.length >= 0 &&
      datosCliente.parametro === ""
    ) {
      console.log(datosCliente);
      setDatosVentas([...datosCliente.items]);
      setCargando(false);
    }
    return () => {
      setDatosVentas([]);
    };
  }, [datosCliente.items]);
  useEffect(() => {
    if (
      vendedorId !== "-1" &&
      datosVendedor?.items.length >= 0 &&
      datosVendedor.parametro === ""
    ) {
      console.log(datosVendedor);
      setDatosVentas([...datosVendedor.items]);
      setCargando(false);
    }
    return () => {
      setDatosVentas([]);
    };
  }, [datosVendedor.items]);

  useEffect(() => {}, [cargando]);
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
          readOnly={cargando}
          onChange={(e) => setId(e.target.value)}
        />
        <Form.Text className="text-muted">Ingresa el id.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="vendedor-id">
        <Form.Label>Selecciona el vendedor:</Form.Label>
        <Form.Select
          value={vendedorId}
          aria-label="cmbVendedor"
          disabled={cargando}
          onChange={(e) => setVendedorId(e.target.value)}
        >
          <option value={"-1"} defaultValue>
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
          disabled={cargando}
          onChange={(e) => setCliente(e.target.value)}
        >
          <option value={"-1"} defaultValue>
            Selecciona
          </option>
          {clientes.length > 0
            ? // eslint-disable-next-line no-unused-vars
              clientes.map((_cliente, i) => (
                <option key={v4()} value={_cliente.cedula}>
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
        cargador={[cargando, setCargando]}
      />
    </Form>
  );
};

FormularioBuscarVenta.propTypes = {
  formulario: PropTypes.object.isRequired,
};

export default FormularioBuscarVenta;
