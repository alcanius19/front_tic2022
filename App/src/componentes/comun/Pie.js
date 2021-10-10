import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/pie.css";
import logo from "../../img/logoB.png";

const Pie = () => {
  return (
    <div
      className={
        "pie d-flex container-fluid bg-dark text-white px-0 position-absolute bottom-0 start-0"
      }
    >
      <div className={"d-flex flex-shrink-0 h-100"}>
        <div className={"d-flex flex-shrink-0 h-100"}>
          <a className="navbar-brand" href="index.html">
            <img
              src={logo}
              className="d-flex rounded h-100"
              alt="Responsive image"
            />
          </a>
        </div>
      </div>
      <div className={"d-flex flex-shrink-0 h-100"}>
        <nav className={"navbar navbar-expand-sm navbar-dark bg-dark"}>
          <ul className="navbar-nav d-flex flex-wrap">
            <li className="nav-item">
              <NavLink to="/" className={"nav-link fs-5"} exact>
                Inicio
              </NavLink>
            </li>
          </ul>
          {" | "}
          Todos los derechos reservados. Equipo 12.
        </nav>
      </div>
    </div>
  
  );
};

export default Pie;
