import React, { useState } from "react";
//import { NavLink, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../css/encabezado.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "react-bootstrap";
import logo from "../../img/logo.png";

const Encabezado = () => {
  //const location = useLocation();
  const [mostrar, setMostrar] = useState(false);
  const [nombreRuta, setNombreRuta] = useState("Ir al módulo");

  const manejarCierre = () => setMostrar(false);
  const manejarMostrar = () => setMostrar(true);
  return (
    <header className={"encabezado container-fluid px-0"}>
      <div
        className={
          "menuEncabezado d-flex justify-content-center align-items-center"
        }
      >
        <div className={"d-flex flex-fill mx-auto"}>
          <nav
            className={"navbar navbar-expand-sm navbar-dark bg-dark flex-fill"}
          >
            <div className="container-fluid p-0">
              <button
                className={"navbar-toggler"}
                type={"button"}
                data-bs-toggle={"collapse"}
                data-bs-target={"#navbarNav"}
                aria-controls={"navbarNav"}
                aria-expanded={"false"}
                aria-label={"Toggle navigation"}
              >
                <span className={"navbar-toggler-icon"}></span>
              </button>
              <div
                className={"collapse navbar-collapse justify-content-center"}
                id={"navbarNav"}
              >
                <ul className="navbar-nav d-flex">
                  <li className="nav-item">
                    <NavLink to="/" className={"nav-link active"} exact>
                      <h5 className={"p-0 my-0"}>Inicio</h5>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/acercade" className={"nav-link"}>
                      <h5 className={"p-0 my-0"}>Acerca de</h5>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contacto" className={"nav-link"}>
                      <h5 className={"p-0 my-0"}>Contacto</h5>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className={"d-flex me-2"}>
          <button className="btn btn-light" onClick={manejarMostrar}>
            <FontAwesomeIcon icon={["far", "user"]} /> Ingresar
          </button>
        </div>
      </div>
      <div
        className={
          "logoEncabezado d-flex align-items-center flex-wrap bg-light"
        }
      >
        <div className={"d-flex flex-shrink-0"}>
          <a className="navbar-brand" href="index.html">
            <img
              src={logo}
              className="d-flex img-fluid rounded"
              alt="Responsive image"
              style={{ width: 35, height: 45 }}
            />
          </a>
        </div>
        <div
          className={"d-flex rounded-3 flex-shrink-0 me-5 bg-dark"}
          style={{ height: 40 }}
        >
          <div
            className={
              "d-flex align-items-center justify-content-center bg-white rounded-start position-relative"
            }
          >
            <button
              className={"btn btn-light navbar-toggler "}
              data-bs-toggle="collapse"
              data-bs-target="#navroute"
              aria-controls="navroute"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon={["fas", "bars"]}
                size="1x"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div
            className="navbar-collapse collapse"
            id="navroute"
            style={{ width: "auto", zIndex: 100 }}
          >
            <div className="bg-dark d-flex justify-content-center flex-wrap w-100 flex-column rounded-bottom">
              <a
                className="close-navbar-toggler collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#navroute"
                aria-controls="navroute"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></a>
              <nav
                className="navbar navbar-expand-sm navbar-dark py-0 flex-wrap w-100 flex-column"
                style={{ zIndex: 2 }}
              >
                <ul className="navbar-nav flex-column flex-wrap">
                  <li
                    className="nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/administracion"
                      className={"nav-link active"}
                      onClick={() => {
                        setNombreRuta("Administración");
                      }}
                      exact
                    >
                      <h6 className={"p-0 my-0"}>Administración</h6>
                    </NavLink>
                  </li>
                  <li
                    className="nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/usuarios"
                      className={"nav-link"}
                      onClick={() => {
                        setNombreRuta("Usuarios");
                      }}
                    >
                      <h6 className={"p-0 my-0"}>Usuarios</h6>
                    </NavLink>
                  </li>
                  <li
                    className="nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/ventas"
                      className={"nav-link"}
                      onClick={() => {
                        setNombreRuta("Ventas");
                      }}
                    >
                      <h6 className={"p-0 my-0"}>ventas</h6>
                    </NavLink>
                  </li>
                  <li
                    className="nav-item"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/otraruta"
                      className={"nav-link"}
                      onClick={() => {
                        setNombreRuta("Otra Ruta");
                      }}
                    >
                      <h6 className={"p-0 my-0"}>Otra Ruta</h6>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className={
              "d-flex align-items-center justify-content-center bg-dark rounded-end"
            }
          >
            <h5 className={"fs-6 my-0 text-center text-white p-2"}>
              {nombreRuta}
            </h5>
          </div>
        </div>
        <div
          className={
            "d-flex h-50 flex-shrink-0 rounded-3 align-items-center justify-content-center"
          }
        >
          <form className={"input-group"}>
            <select
              className="form-select form-select-sm bg-light"
              aria-label="Default select example"
            >
              <option defaultValue>Categoría</option>
              <option value="1">Uno</option>
              <option value="2">Dos</option>
              <option value="3">Tres</option>
            </select>
            <input
              type="text"
              placeholder="Buscar"
              className="form-control form-control-sm bg-light"
              id="exampleInputPassword1"
            />
            <button
              type="submit"
              className="btn btn-outline-secondary d-flex align-items-center justify-content-center "
            >
              <FontAwesomeIcon
                icon={["fas", "search"]}
                size="1x"
                style={{ color: "black" }}
              />
            </button>
          </form>
        </div>
      </div>
      <Modal show={mostrar} onHide={manejarCierre}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar al sistema</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Bienvenido!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={manejarCierre}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={manejarCierre}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Encabezado;
