import React from "react";

const Productos = (props) => {
  const [producto, setProducto] = React.useState(props.producto);
  // const form = React.useRef(null);

  console.log(producto);

  const [estado, setEstado] = React.useState(false);
  const enviar = (e) => {
    e.preventDefault();
    setProducto(producto);
    console.log(producto)
  };
  const manipularEstado = () => {
    setEstado(!estado);
    console.log(estado);
  };

  return (
    <>
      <div id="title-products" className={"container-fluid bg-ligth "}>
        <h1>Modulo de productos</h1>
      </div>
      <hr />
      <form onSubmit={enviar}>
        <div className="container">
          <div className="form-group row p-2">
            <label className="col-sm-2 col-form-label">Descripcion</label>
            <div className="col-sm-4 pull-left">
              <input type="text" name="producto"  />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Valor Unitario"
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
                <button type="submit"   className="btn btn-primary ">
                  Add Producto
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <hr />
    </>
  );
};
export default Productos;
