import React, { Fragment } from "react";
import "../css/login.css";
import imagen from  "../img/Digital_Tech.jpg";
function Login() {
  return (
    <Fragment>
      <div className="bg-img">
        <div className="titulo">
          <h1>InnovaTECH</h1>
        </div>
        <div className="lema">
          <h2>Un vistazo al futuro</h2>
        </div>

        <div className="imgLogo">
          <img
            src={imagen}
            className="d-flex rounded h-100"
            alt="Responsive image"
          />
        </div>

        <div className="content">
          <header>Iniciar Sección</header>

          <form>
            <div className="field">
              <span className="fa fa-user"></span>
              <input type="text" placeholder="email or phone" />
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input type="password" placeholder="password" />
            </div>

            <div className="pass">
              <a href="#">Olvidaste contraseña?</a>
            </div>

            <div className="field">
              <span></span>
              <input type="submit" value="Ingresar" />
            </div>

            <div className="field space">
              <span></span>
              <a href="crear_usuario.html">Crear Usuario</a>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
