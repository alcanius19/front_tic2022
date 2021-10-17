import React from "react";
import axios from "axios";

function usuariosPrueba() {
  const [usuarios, setUsuarios] = React.useState([]);
  const obtenerUsuarios = async () => {
    const res = await axios.get("http://localhost:4000/api/usuarios");
    const users = res.data;
    setUsuarios(users);
  };
  obtenerUsuarios;

  return <div></div>;
}

export default usuariosPrueba;
