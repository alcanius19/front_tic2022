import React from "react";
import { Route, Switch } from "react-router-dom";
//Pagínas
import PaginaInicio from "./PaginaInicio";
import PaginaAdministracion from "./administracion_ventas/PaginaAdministracion";
import PaginaAcercaDe from "./PaginaAcercaDe";
import PaginaUsuarios from "./PaginaUsuarios";
import PaginaVentas from "./PaginaVentas";
import Productos from "./Productos";
import Vendedores from "./Vendedores";

// Ccmún
import Encabezado from "./comun/Encabezado";
import Pie from "./comun/Pie";
import PaginaNoEncontrada from "./PaginaNoEncontrada";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab);
library.add(fas);
library.add(far);

function App() {
  return (
    <div className="container-fluid px-0 h-100">
      <Encabezado />
      <Switch>
        <Route exact path="/" component={PaginaInicio} />

        <Route exact path="/administracion" component={PaginaAdministracion} />
        <Route exact path="/usuarios" component={PaginaUsuarios} />
        <Route exact path="/ventas" component={PaginaVentas} />
        <Route path="/acercade" component={PaginaAcercaDe} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/vendedores" component={Vendedores} />

        <Route component={PaginaNoEncontrada} />
      </Switch>
      <Pie />
    </div>
  );
}

export default App;
