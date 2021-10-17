import React from "react";
import axios from "axios";
const Productos = () => {
  const [producto, setProductos] = React.useState([]);
  const [estado, setEstado] = React.useState(false);
  const [descripcion, setDescripcion] = React.useState("");
  const [valor_unit, setValor_unit] = React.useState("");
  const [stock, setStock] = React.useState("");

  const url = "http://localhost:4000/api/productos";

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
      .post("http://localhost:4000/api/productos", postData)
      .then((response) => {
        console.log(response);
      });
  };

  const manipularEstado = () => {
    setEstado(!estado);
    console.log(estado);
  };

  React.useEffect(() => {
    setTimeout(() => {
      obtenerProductos();
    }, 2000);
  });

  return (
    <>
      <div id="title-products" className={"container-fluid bg-ligth "}>
        <h1>Modulo de productos</h1>
      </div>
      <hr />
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
      <hr />

      <div className="row justify-content-center">
        <div className="col-lg-10">
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
                    <button className="btn btn-danger">Eliminar</button>{" "}
                    <button className="btn btn-warning">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
export default Productos;
