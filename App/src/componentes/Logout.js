import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Logout() {
  const { logout } = useAuth0();
  return (
    <Link
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    >
     
      Logout
    </Link>
  );
}

export default Logout;
