import React from "react";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";

const PaginaUsuarios = () => {
  const [modalEditar, setModalEditar] = React.useState(false);
  const [usuarios, setUsuarios] = React.useState([]);
  const [estado, setEstado] = React.useState("");
  const [rol, setRol] = React.useState("");
  const [usuarioSelect, setUsuarioSelect] = React.useState([
    {
      _id: "",
      estado: "",
      rol: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(usuarioSelect);
  };

  const editarUsuario = () => {
    let api = url.concat(`/${usuarioSelect._id}`);
    console.log(api);
    axios.put(api, usuarioSelect).then((response) => {
      console.log(response);
    });
    setModalEditar(false);
  };

  const eliminarUsuario = (usuario) => {
    let api = url.concat(`/${usuario}`);
    axios.delete(api, usuarioSelect).then((response) => {
      console.log(response);
    });
  };

  const seleccionarUsuario = (elemento, caso) => {
    setUsuarioSelect(elemento);
    caso === "Editar" && setModalEditar(true);
  };

  const url = "http://localhost:4000/api/usuarios";

  const obtenerUsuarios = async (url) => {
    const res = await axios.get(url);
    const users = res.data;
    setUsuarios(users);
  };

  React.useEffect(() => {
    setTimeout(() => {
      obtenerUsuarios(url);
    }, 2000);
  });

  return (
    <>
      <div id="title-products" className={"container-fluid bg-ligth "}>
        <h1>Modulo Usuarios</h1>
      </div>
      <div className="container"></div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <table id="example" className="table table-responsive">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((item, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item.nombre}</td>
                  <td>{item.email}</td>
                  <td>{item.rol}</td>
                  <td>{item.estado}</td>
                  <td>{item.fecha}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminarUsuario(item._id);
                      }}
                    >
                      Eliminar
                    </button>{" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        seleccionarUsuario(item, "Editar");
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

          <Modal show={modalEditar}>
            <Modal.Header>
              <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label>ID</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  name="id"
                  value={usuarioSelect && usuarioSelect._id}
                  onChange={handleChange}
                />
                <br />
                <label>Estado</label>
                <select
                  className="form-control"
                  name="estado"
                  value={usuarioSelect && usuarioSelect.estado}
                  onChange={handleChange}
                >
                  <option value={"pendiente"}>Pendiente</option>
                  <option value={"autorizado"}>Autorizado</option>
                  <option value={"no Autorizado"}>No Autorizado</option>
                </select>
                <br />
                <label>Rol</label>
                <select
                  className="form-control"
                  name="rol"
                  value={usuarioSelect && usuarioSelect.rol}
                  onChange={handleChange}
                >
                  <option value={"administrador"}>Admin</option>
                  <option value={"vendedor"}>Vendedor</option>
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
                onClick={() => editarUsuario()}
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

export default PaginaUsuarios;
