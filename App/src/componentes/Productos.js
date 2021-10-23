import React from "react";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";
const Productos = () => {
  const [modalEditar, setModalEditar] = React.useState(false);

  const [producto, setProductos] = React.useState([]);
  const [estado, setEstado] = React.useState(false);
  const [descripcion, setDescripcion] = React.useState("");
  const [valor_unit, setValor_unit] = React.useState("");
  const [stock, setStock] = React.useState("");

  // obtener los atributos del producto seleccionado
  const [productoSelect, setProductoSelect] = React.useState([
    {
      _id: "",
      estado: false,
      descripcion: "",
      valor_unit: "",
      stock: "",
    },
  ]);

  const manipularEstado = () => {
    setEstado(!estado);
    return estado;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(productoSelect);
  };

  const editarProducto = () => {
    let api = url.concat(`/${productoSelect._id}`);
    axios.put(api, productoSelect).then((response) => {
      console.log(response);
    });
    setModalEditar(false);
  };

  const eliminarProducto = (producto) => {
    let api = url.concat(`/${producto}`);
    axios.delete(api, productoSelect).then((response) => {
      console.log(response);
    });
  };

  const seleccionarProducto = (elemento, caso) => {
    setProductoSelect(elemento);
    caso === "Editar" && setModalEditar(true);
  };

  const url = "https://innovatech2021.herokuapp.com/api/productos";

  const obtenerProductos = async () => {
    const res = await axios.get(url);
    const products = res.data;
    setProductos(products);
  };

  const crearProducto = (e) => {
    e.preventDefault();
    const postData = {
      descripcion,
      valor_unit,
      estado,
      stock,
    };

    axios
      .post("https://innovatech2021.herokuapp.com/api/productos", postData)
      .then((response) => {
        console.log(response);
      });
  };

  React.useEffect(() => {
    setTimeout(() => {
      obtenerProductos();
    }, 2000);
  });

  let status = localStorage.getItem("state");
  let rolUser = localStorage.getItem("rol");
  return (
    <>
      <div id="title-products" className={"container-fluid bg-ligth "}>
        <h1>Modulo de productos</h1>
      </div>
      <hr />
      {status == "autorizado" && rolUser == "administrador" ? (
        <form onSubmit={crearProducto}>
          <div className="container">
            <div className="form-group row p-2">
              <label className="col-sm-2 col-form-label">Descripcion</label>
              <div className="col-sm-4 pull-left">
                <input
                  className="form-control"
                  type="text"
                  name="producto"
                  value={descripcion}
                  onChange={(e) => {
                    setDescripcion(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Valor Unitario"
                  value={valor_unit}
                  onChange={(e) => {
                    setValor_unit(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row p-2">
              <label className="col-sm-2 col-form-label">Stock</label>
              <div className="col-sm-4 pull-left">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </div>
              <div className="col-sm-2">
                <label>Estado</label>
              </div>
              <div className="col-sm-1">
                <input
                  type="checkbox"
                  value={estado}
                  onChange={manipularEstado}
                />
              </div>

              <div className="form-group row p-2">
                <div className="col-sm-8 "></div>
                <div className="col-sm-4 ">
                  <button type="submit" className="btn btn-primary ">
                    Add Producto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <h1>Modulo Solo Administrativo</h1>
      )}
      <hr />

      <div className="row justify-content-center">
        <div className="col-lg-10">
           {status == "autorizado" && rolUser == "administrador" ? (
          <table id="example" className="table table-responsive">
            <thead>
              <tr>
                <th>Id</th>
                <th>Descripcion</th>
                <th>Valor Unitario</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {producto.map((item, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.valor_unit}</td>
                  <td>{item.stock}</td>
                  <td>{String(item.estado)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminarProducto(item._id);
                      }}
                    >
                      Eliminar
                    </button>{" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        seleccionarProducto(item, "Editar");
                      }}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
           ):(
             ''
           )}

          <Modal show={modalEditar}>
            <Modal.Header>
              <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label>ID</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  name="id"
                  value={productoSelect && productoSelect._id}
                  onChange={handleChange}
                />
                <br />
                <label>Descripcion</label>
                <input
                  className="form-control"
                  type="text"
                  name="descripcion"
                  value={productoSelect && productoSelect.descripcion}
                  onChange={handleChange}
                />
                <br />
                <label>Valor Unitario</label>
                <input
                  className="form-control"
                  type="text"
                  name="valor_unit"
                  value={productoSelect && productoSelect.valor_unit}
                  onChange={handleChange}
                />
                <br />
                <label>Stock</label>
                <input
                  className="form-control"
                  type="text"
                  name="stock"
                  value={productoSelect && productoSelect.stock}
                  onChange={handleChange}
                />
                <br />
                <label>Estado</label>
                <select
                  name="estado"
                  value={productoSelect && productoSelect.estado}
                  onChange={handleChange}
                >
                  <option value={true}>Activo</option>
                  <option value={false}>Inactivo</option>
                </select>
                <br />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-danger"
                onClick={() => setModalEditar(false)}
              >
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                onClick={() => editarProducto()}
              >
                Editar
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default Productos;
