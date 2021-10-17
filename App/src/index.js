import * as React from "react";
import { render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./css/index.css";
import App from "./componentes/app";

render(
  <Router>
    <Auth0Provider
      domain="innovatech2021.eu.auth0.com"
      clientId="gqW8b0Y1gQMWreWYUGooQyQ4dg2gf2Kd"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById("app")
);
