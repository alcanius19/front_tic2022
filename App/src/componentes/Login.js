import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-light"
      onClick={() => {
        loginWithRedirect();
      }}
    >
      <FontAwesomeIcon icon={["far", "user"]} />
      Ingresar
    </button>
  );
};

export default Login;
