import React, { Fragment } from "react";
import "../css/login.css";
import imagen from "../img/Digital_Tech.jpg";
import useUsuarios from "../ganchos/Usuarios";
function Login() {
  const [usuario, setUsuario] = React.useState({});
  const [usuarioExiste, setUsuarioExiste] = React.useState(false);
  const [datos, setDatos] = useUsuarios();

  React.useEffect(() => {
    if (usuario.nombre !== "") {
      const respuesta = datos.filter((item) => item.nombre == usuario.nombre);
      respuesta.length > 0 ? setUsuarioExiste(true) : setUsuarioExiste(false);
      setUsuario({ ...usuario, ...respuesta[0] });
    }
  }, [usuario.nombre]);

  const validarUsuario = () => {
    usuarioExiste
      ? alert("Usuario: " + JSON.stringify(usuario))
      : alert("Usuario no existe.");
  };
  const recargar = (e) => {
    e.preventDefault();
  };
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

          <form onSubmit={recargar}>
            <div className="field">
              <span className="fa fa-user"></span>
              <input
                type="text"
                placeholder=""
                onChange={(e) => {
                  setUsuario({ ...usuario, nombre: e.target.value });
                }}
                defaultValue={usuario.nombre}
              />
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input type="password" placeholder="password" />
            </div>
            <div>{usuario.nombre}</div>

            <div className="pass">
              <a href="#">Olvidaste contraseña?</a>
            </div>

            <div className="field">
              <span></span>
              <button
                className="btn btn-info"
                onClick={() => {
                  validarUsuario();
                }}
              >
                Enviar
              </button>
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
