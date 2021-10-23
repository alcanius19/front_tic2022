import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useExtraer from "./ganchos/extraerInicio";
import useGuardar from "./ganchos/guardar_venta";
import useEliminar from "./ganchos/eliminar_venta";
import useExtraerVenta from "./ganchos/extraer_venta";
import useActualizar from "./ganchos/actualizar_venta";
//import $ from "jquery";
// import "@fortawesome/fontawesome-free/js/brands";
// import "@fortawesome/fontawesome-free/js/solid";
// import "@fortawesome/fontawesome-free/js/fontawesome";
import Tabla from "./tabla/Tabla";
import modelo_tabla_productos from "./tabla/ModeloTablaProductos";
import { v4 } from "uuid";
import Form from "react-bootstrap/Form";
import useMensajes from "./ganchos/mensajes";
import ContenedorMensajes from "./utilidades/contenedor_mensajes";
import VentanaModal from "./utilidades/ventana_modal";
import FormularioBuscarVenta from "./formularios/buscarVenta";
import FormularioAgregarProducto from "./formularios/agregar_producto";
import FormularioConfirmar from "./formularios/confirmar";

// export const productsGenerator = (quantity) => {
//   const items = [];
//   for (let i = 1; i < quantity; i++) {
//     items.push({
//       id: i,
//       nombre: `p ${i}`,
//       descripcion: `${i}`,
//       precio: 100 + i,
//       cantidad: `${i}`,
//       total: `${i}`,
//     });
//   }
//   return items;
// };

const PaginaAdministracionVentas = () => {
  const rutas = ["/api/usuarios", "/api/productos", "/api/ventas"];

  // eslint-disable-next-line no-unused-vars
  const [usuarios, setUsuarios] = useExtraer(rutas[0]);
  // eslint-disable-next-line no-unused-vars
  const [productos, setProductos] = useExtraer(rutas[1]);
  // eslint-disable-next-line no-unused-vars
  const [ventas, setVentas] = useExtraer(rutas[2]);

  // eslint-disable-next-line no-unused-vars
  const [extraerVenta, setExtraerVenta] = useExtraerVenta({
    ruta: `${rutas[2]}/codigo`,
    parametro: "",
    items: [],
  });
  const [guardarVenta, setGuardarVenta] = useGuardar({
    ruta: rutas[2],
    parametro: "",
    items: [],
    respuesta: [],
  });
  const [eliminarVenta, setEliminarVenta] = useEliminar({
    ruta: rutas[2],
    parametro: "",
    items: [],
    respuesta: [],
  });
  const [actualizarVenta, setActualizarVenta] = useActualizar({
    ruta: rutas[2],
    parametro: "",
    items: [],
    respuesta: [],
  });

  const [codigoFactura, setCodigoFactura] = useState("");
  const [vendedor, setVendedor] = useState(-1);
  const [descripcion, setDescripcion] = useState("");
  const [cliente, setCliente] = useState("");
  const [cedulaCliente, setCedulaCliente] = useState(0);
  const [fechaVenta, setFechaVenta] = useState("");
  const [total, setTotal] = useState(0);
  const [estadoVenta, setEstadoVenta] = useState("1");
  const [estadosVenta, setEstadosVenta] = useState([
    { nombre: "En proceso", valor: "1", estado: true },
    { nombre: "Cancelada", valor: "2", estado: false },
    { nombre: "Entregada", valor: "3", estado: false },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [mensaje, setMensaje, pila, setPila] = useMensajes({
    titulo: "",
    mensaje: "",
    tiempo: 0,
  });
  const [errores, setErrores] = useState({
    codigo: "",
    descripcion: "",
    cliente: "",
    cedula: "",
    fecha: "",
    vendedor: "",
  });
  const [ventaActiva, setVentaActiva] = useState([]);
  const [ventaBuscar, setVentaBuscar] = useState([]);
  const [productosActivos, setProductosActivos] = useState([]);
  const [productosBuscar, setProductosBuscar] = useState([]);

  const [mostrarBuscar, setMostrarBuscar] = useState(false);
  let propsformularioBuscarVenta = {
    setVentaBuscar,
    botones: {
      boton1: {
        nombre: "Seleccionar",
        click: () => {
          if (ventaBuscar.length <= 0) {
            alerta({
              titulo: "Información",
              mensaje: `Seleccione una factura.`,
              tiempo: 0,
            });
          } else {
            setMostrarBuscar(false);
            setVentaActiva(ventaBuscar);
            alerta({
              titulo: "Información",
              mensaje: `La factura con el ID: ${ventaBuscar[0].codigo} se encuentra activa.`,
              tiempo: 0,
            });
            setVentaBuscar([]);
          }
        },
      },
    },
  };

  const [mostrarAgregarProducto, setAgregarProducto] = useState(false);
  let propsformularioAgregarProducto = {
    setProductosBuscar,
    botones: {
      boton1: {
        nombre: "Agregar",
        click: () => {
          if (productosBuscar.length <= 0) {
            alerta({
              titulo: "Información",
              mensaje: "Selecciona por lo menos un producto.",
              tiempo: 0,
            });
          } else {
            console.log(productosBuscar);
            console.log(productosActivos);
            const existe =
              productosBuscar.filter((item) =>
                productosActivos.some((_item) => item._id == _item._id)
              ).length > 0;
            if (existe) {
              alerta({
                titulo: "Productos Seleccionados",
                mensaje: `Uno o más productos ya existen en la factura.`,
                tiempo: 0,
              });
            } else {
              setAgregarProducto(false);
              setProductosActivos((_productosAnteriores) => [
                ..._productosAnteriores,
                ...productosBuscar,
              ]);
              alerta({
                titulo: "Productos Seleccionados",
                mensaje: `Los productos ${JSON.stringify(
                  productosBuscar.map((item) => item.descripcion)
                )} se encuentran activos.`,
                tiempo: 0,
              });
              setProductosBuscar([]);
            }
          }
        },
      },
    },
  };

  const [confirmarEliminarProducto, setConfirmarEliminarProducto] =
    useState(false);
  let propsFormularioEliminarProducto = {
    mensaje: "¿Deseas eliminar los productos seleccionados?",
    textoOpcion: "No se puede deshacer la opción.",
    botones: { boton1: { nombre: "Eliminar", click: () => alert("hola") } },
  };

  const btnNuevaFactura = () => {
    limpiarFactura();
    setCodigoFactura(v4());
  };

  const btnGuardarFactura = () => {
    let codigoFacturaVenta = [];
    if (codigoFactura === "") {
      error("codigo", "El código no puede estar vacío.");
      return;
    }
    if (cliente === "") {
      error("cliente", "Debe ingresar un cliente.");
      return;
    }
    if (cedulaCliente == 0) {
      error("cedula", "Debe ingresar la cedula.");
      return;
    }
    if (vendedor == -1) {
      error("vendedor", "Debe elegir un vendedor.");
      return;
    }
    if (fechaVenta === "") {
      error("fecha", "Debe seleccionar una fecha.");
      return;
    }
    const venta = {
      codigo: codigoFactura,
      cliente: cliente,
      cedula: cedulaCliente,
      id_vendedor: vendedor,
      descripcion: descripcion,
      estado: estadoVenta,
      fecha_venta: fechaVenta,
      productos: productosActivos,
      total: total,
    };
    if (ventas.length > 0) {
      codigoFacturaVenta = ventas.filter(
        (item) => item.codigo == codigoFactura
      );
      codigoFacturaVenta.length > 0
        ? setActualizarVenta((ventaAnterior) => ({
            ...ventaAnterior,
            parametro: codigoFactura,
            items: { ...venta },
          }))
        : setGuardarVenta((ventaAnterior) => ({
            ...ventaAnterior,
            items: { ...venta },
          }));
    } else {
      setGuardarVenta((ventaAnterior) => ({
        ...ventaAnterior,
        items: { ...venta },
      }));
    }
    setVentas([]);
  };

  const btnBuscarFactura = () => {
    setMostrarBuscar(true);
  };

  const btnBorrarFactura = () => {
    if (ventaActiva?.length > 0) {
      setEliminarVenta((ventaAnterior) => ({
        ...ventaAnterior,
        parametro: codigoFactura,
      }));
    } else {
      alerta({
        titulo: "Información",
        mensaje:
          "No es posible eliminar la factura. No hay una factura activa.",
        tiempo: 0,
      });
    }
  };

  const btnLimpiarFactura = () => {
    limpiarFactura();
    alerta({
      titulo: "Factura Limpiada",
      mensaje: "Limpiaste la factura.",
      tiempo: 0,
    });
  };

  const btnAgregarProducto = () => {
    if (codigoFactura !== "") {
      setAgregarProducto(true);
    } else {
      alerta({
        titulo: "Información",
        mensaje: "No es posible agregar productos. No hay una factura activa.",
        tiempo: 0,
      });
    }
  };

  const btnEliminarProducto = () => {
    if (codigoFactura !== "") {
      setProductosActivos([]);
      alerta({
        titulo: "Información",
        mensaje: "Productos eliminados.",
        tiempo: 0,
      });
    } else {
      alerta({
        titulo: "Información",
        mensaje:
          "No es posible borrar los productos. No hay una factura activa.",
        tiempo: 0,
      });
    }
  };

  const alBorrarFilas = () => {
    alerta({
      titulo: "Información",
      mensaje: "Se ha eliminado un producto.",
      tiempo: 0,
    });
  };

  useEffect(() => {
    if (ventaActiva?.length && ventaActiva.length > 0) {
      console.log(JSON.stringify(ventaActiva));
      setCodigoFactura(ventaActiva[0].codigo);
      setVendedor(ventaActiva[0].id_vendedor);
      setDescripcion(ventaActiva[0].descripcion);
      setCliente(ventaActiva[0].cliente);
      setCedulaCliente(ventaActiva[0].cedula);
      setFechaVenta(
        new Date(ventaActiva[0].fecha_venta).toISOString().slice(0, 10)
      );
      setTotal(ventaActiva[0].total);
      setEstadoVenta(ventaActiva[0].estado);
      setEstadosVenta((estados) => [
        ...estados.map((item) => ({
          nombre: item.nombre,
          valor: item.valor,
          estado: item.valor == ventaActiva[0].estado,
        })),
      ]);
      setProductosActivos(ventaActiva[0].productos);
    }
  }, [ventaActiva]);
  useEffect(() => {
    if (productosActivos.length > 0) {
      setTotal(
        productosActivos.map((item) => item.total).reduce((pV, cV) => cV + pV)
      );
    } else {
      setTotal(0);
    }
  }, [productosActivos]);

  useEffect(() => {
    if (Object.keys(guardarVenta.respuesta).length > 0) {
      if (guardarVenta.respuesta[0].status == "guardado") {
        alerta({
          titulo: "Operación Exitosa",
          mensaje: "La factura fue guardada.",
          tiempo: 0,
        });
      } else {
        alerta({
          titulo: "Operacion Fallida",
          mensaje: "La factura no fue guardada.",
          tiempo: 0,
        });
      }
    }
  }, [guardarVenta.respuesta]);

  useEffect(() => {
    if (Object.keys(actualizarVenta.respuesta).length > 0) {
      if (actualizarVenta.respuesta[0].status == "actualizado") {
        alerta({
          titulo: "Operación Exitosa",
          mensaje: "La factura fue actualizada.",
          tiempo: 0,
        });
      } else {
        alerta({
          titulo: "Operacion Fallida",
          mensaje: "La factura no fue guardada.",
          tiempo: 0,
        });
      }
    }
  }, [actualizarVenta.respuesta]);
  useEffect(() => {
    if (Object.keys(eliminarVenta.respuesta).length > 0) {
      if (eliminarVenta.respuesta[0].status == "eliminado") {
        alerta({
          titulo: "Operación Exitosa",
          mensaje: "La factura fue eliminada.",
          tiempo: 0,
        });
        limpiarFactura();
      } else {
        alerta({
          titulo: "Operacion Fallida",
          mensaje: "La factura no fue eliminada.",
          tiempo: 0,
        });
      }
    }
  }, [eliminarVenta.respuesta]);

  useEffect(() => {
    if (codigoFactura !== "" && vendedor == -1) {
      alerta({
        titulo: "Factura Nueva",
        mensaje: `Nueva factura con id: ${codigoFactura}`,
        tiempo: 0,
      });
    }
  }, [codigoFactura]);

  const onSeleccion = () => {};
  const alerta = ({ titulo, mensaje, tiempo }) => {
    setMensaje({
      ...mensaje,
      titulo,
      mensaje,
      tiempo,
    });
  };
  const limpiarFactura = () => {
    setCodigoFactura("");
    setVendedor("-1");
    setDescripcion("");
    setCliente("");
    setCedulaCliente("");
    setFechaVenta("");
    setTotal(0);
    setEstadoVenta("1");
    setEstadosVenta([
      { nombre: "En proceso", valor: "1", estado: true },
      { nombre: "Cancelada", valor: "2", estado: false },
      { nombre: "Entregada", valor: "3", estado: false },
    ]);
    setVentaActiva([]);
    setProductosActivos([]);
  };

  const error = (tipo, _error) => {
    switch (tipo) {
      case "codigo":
        setErrores({ ...errores, codigo: _error });
        break;
      case "descripcion":
        setErrores({ ...errores, descripcion: _error });
        break;
      case "cliente":
        setErrores({ ...errores, cliente: _error });
        break;
      case "cedula":
        setErrores({ ...errores, cedula: _error });
        break;
      case "fecha":
        setErrores({ ...errores, fecha: _error });
        break;
      case "vendedor":
        setErrores({ ...errores, vendedor: _error });
        break;
    }
  };
  useEffect(() => {
    if (
      errores.codigo !== "" ||
      errores.descripcion !== "" ||
      errores.cliente !== "" ||
      errores.cedula !== "" ||
      errores.fecha !== "" ||
      errores.vendedor !== ""
    ) {
      alerta({
        titulo: "Se encontraron errores:",
        mensaje: `Revisa los campos ${errores.codigo} ${errores.descripcion} ${errores.cliente} ${errores.cedula} ${errores.fecha} ${errores.vendedor}`,
        tiempo: 0,
      });
      setErrores({
        ...errores,
        codigo: "",
        descripcion: "",
        cliente: "",
        cedula: "",
        fecha: "",
        vendedor: "",
      });
    }
  }, [errores]);
  return (
    //Principal
    <main className="principal d-flex border-top-1 rounded-1 flex-nowrap flex-shrink-0">
      <ContenedorMensajes pila={pila} setPila={setPila} />
      <div className="container-fluid h-100 text-white bg-light">
        {/* herramientas factura*/}
        <div
          className={
            "herramientas bg-light rounded-1 d-flex justify-content-center align-items-center flex-wrap p-1"
          }
        >
          <div
            className={
              "d-flex justify-content-center align-items-center flex-shrink-0"
            }
          >
            <button className={"btn btn-light"} onClick={btnNuevaFactura}>
              <FontAwesomeIcon
                icon={["fas", "plus-square"]}
                size="lg"
                style={{ color: "black" }}
              />
            </button>
            <button className={"btn btn-light"} onClick={btnGuardarFactura}>
              <FontAwesomeIcon
                icon={["fas", "save"]}
                size="lg"
                style={{ color: "black" }}
              />
            </button>
            <button className={"btn btn-light"} onClick={btnBuscarFactura}>
              <FontAwesomeIcon
                icon={["fas", "search"]}
                size="lg"
                style={{ color: "black" }}
              />
            </button>
            <VentanaModal
              abrir={mostrarBuscar}
              manejarCierre={() => {
                setMostrarBuscar(false);
              }}
              titulo={"Buscar Venta"}
              formulario={
                <FormularioBuscarVenta
                  formulario={propsformularioBuscarVenta}
                />
              }
              botones={propsformularioBuscarVenta.botones}
            />
            <button className={"btn btn-light"} onClick={btnBorrarFactura}>
              <FontAwesomeIcon
                icon={["far", "trash-alt"]}
                size="lg"
                style={{ color: "black" }}
              />
            </button>
            <button className={"btn btn-light"} onClick={btnLimpiarFactura}>
              <FontAwesomeIcon
                icon={["fas", "eraser"]}
                size="lg"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div
            className={
              "d-flex justify-content-center align-items-center flex-grow-1 ms-2"
            }
          >
            <div className="d-flex input-group input-group-sm">
              <span className="input-group-text">ID factura:</span>
              <input
                type="text"
                className="form-control"
                placeholder="ID Venta"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={codigoFactura}
                onChange={(e) => setCodigoFactura(e.target.value)}
                readOnly
              />
              <span className="input-group-text">Vendedor:</span>
              <select
                value={vendedor}
                className="form-select"
                id="inputGroupSelect01"
                onChange={(e) => setVendedor(e.target.value)}
              >
                <option key={"-1"} value={"-1"}>
                  Elegir...
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
              </select>
            </div>
          </div>
        </div>
        {/* descripcion factura*/}
        <div
          className={
            "descripcion d-flex justify-content-center align-items-center"
          }
        >
          <div className="input-group input-group-sm">
            <span className="input-group-text">Descripción:</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
        </div>
        {/* info factura*/}
        <div
          className={
            "info-factura container-fluid bg-light d-flex align-items-center justify-content-center mt-1 py-2"
          }
        >
          <div
            className={
              "d-flex bg-dark rounded-3 shadow-lg flex-shrink-0 me-2 p-1"
            }
          >
            <h5 className={"fs-6 my-0 text-center text-white p-1"}>Cliente</h5>
          </div>
          <div className="d-flex input-group input-group-sm">
            <span className="input-group-text">Cliente:</span>
            <Form.Control
              type="input"
              name="cliente"
              placeholder="Cliente..."
              aria-label="cliente"
              aria-describedby="nombre-cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
            <span className="input-group-text">Cédula:</span>
            <Form.Control
              type="input"
              name="cedula"
              placeholder="Cédula"
              aria-label="cedula"
              aria-describedby="cedula-cliente"
              className={"text-end"}
              value={cedulaCliente}
              onChange={(e) => setCedulaCliente(e.target.value)}
            />
            <span className="input-group-text">Fecha venta:</span>
            <Form.Control
              type="date"
              name="fecha-venta"
              placeholder="Fecha venta"
              aria-label="fecha-venta"
              aria-describedby="fecha-venta"
              value={fechaVenta}
              onChange={(e) => setFechaVenta(e.target.value)}
            />
            <span className="input-group-text">Estado:</span>
            {estadosVenta.map((estado, idx) => (
              <Fragment key={v4()}>
                <input
                  type="radio"
                  className="btn-check"
                  name={`radio`}
                  key={v4()}
                  id={`radio-${idx}`}
                  autoComplete="off"
                  checked={estadoVenta == estado.valor ? true : false}
                  value={estado.valor}
                  onChange={(e) => setEstadoVenta(e.currentTarget.value)}
                />
                <label
                  className={"btn btn-outline-dark"}
                  htmlFor={`radio-${idx}`}
                  key={v4()}
                >
                  {estado.nombre}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        {/* opciones tabla*/}
        <div
          className={
            "opciones-tabla container-fluid p-1 bg-light shadow rounded mb-2 d-flex align-items-center justify-content-center"
          }
        >
          <div className={"d-flex me-5"}>
            <button className={"btn btn-dark"} onClick={btnAgregarProducto}>
              <FontAwesomeIcon
                icon={["fas", "plus"]}
                size="1x"
                style={{ color: "white" }}
                className={"me-1"}
              />
              Agregar producto
            </button>
            <VentanaModal
              abrir={mostrarAgregarProducto}
              manejarCierre={() => {
                setAgregarProducto(false);
              }}
              titulo={"Agregar Producto"}
              formulario={
                <FormularioAgregarProducto
                  formulario={propsformularioAgregarProducto}
                />
              }
              botones={propsformularioAgregarProducto.botones}
            />
          </div>
          <div className={"d-flex me-5"}>
            <button className={"btn btn-dark"} onClick={btnEliminarProducto}>
              <FontAwesomeIcon
                icon={["fas", "minus"]}
                size="1x"
                style={{ color: "white" }}
                className={"me-1"}
              />
              Borrar producto
            </button>
            <VentanaModal
              abrir={confirmarEliminarProducto}
              manejarCierre={() => {
                setConfirmarEliminarProducto(false);
              }}
              titulo={"Eliminar Productos"}
              formulario={
                <FormularioConfirmar
                  formulario={propsFormularioEliminarProducto}
                />
              }
              botones={propsFormularioEliminarProducto.botones}
            />
          </div>
          <div className="d-flex w-25 input-group input-group-sm">
            <span className="input-group-text">Total:</span>
            <input
              type="text"
              className="form-control text-end"
              placeholder="$0.0"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </div>
        </div>
        {/* tabla*/}
        <div
          className={"tabla container-fluid overflow-auto"}
          style={{ height: 250 }}
        >
          <Tabla
            datos={productosActivos}
            setDatos={setProductosActivos}
            modelo={modelo_tabla_productos}
            modo={"checkbox"}
            metodoSeleccion={onSeleccion}
            alBorrarFilas={alBorrarFilas}
          />
        </div>
      </div>
    </main>
  );
};

export default PaginaAdministracionVentas;
