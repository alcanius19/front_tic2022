//import React, { useEffect, useState } from "react";
import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaginaUsuarios = () => {
  return (
    <>
      <div id="title-products" className={"container-fluid bg-ligth "}>
        <h1>Modulo Usuarios</h1>
      </div>
      <div className="container">
        <form>
          <div className="form-group row p-2">
            <label className="col-sm-2 col-form-label">Nombre</label>
            <div className="col-sm-4 pull-left">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="col-2">
              <label>Fecha Ingreso</label>
            </div>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                placeholder="Fecha Ingreso"
              />
            </div>
          </div>

          <div className="form-group row p-2">
            <label className="col-sm-2 col-form-label">Cargo</label>
            <div className="col-sm-4">
              <input type="text" className="form-control" placeholder="Cargo" />
            </div>
            <label className="col-sm-2 col-form-label">Telefono</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Telefono"
              />
            </div>
            <div className="col-sm-2 mt-2">
              <label>Estado</label>
            </div>
            <div className="col-sm-1 mt-2">
              <input type="checkbox" checked data-toggle="toggle" />
            </div>

            <div className="form-group row p-2">
              <div className="col-sm-8 "></div>
              <div className="col-sm-4 ">
                <button className="btn btn-primary">Add Vendedor</button>
              </div>
            </div>
            <hr />
          </div>
        </form>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <table id="example" className="table table-responsive">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Telefono</th>
                <th>Fecha Ingreso</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Felipe </td>
                <td>Administrador</td>
                <td>3223141038</td>
                <td>22/12/2021</td>
                <td>Activo</td>
                <td>
                  <button className="btn btn-danger">Eliminar</button>
                  <button className="btn btn-warning">Editar</button>
                </td>
              </tr>

              <tr>
                <td>Jessica </td>
                <td>Vendedor</td>
                <td>3223141038</td>
                <td>10/12/2021</td>
                <td>Activo</td>
                <td>
                  <button className="btn btn-danger">Eliminar</button>
                  <button className="btn btn-warning">Editar</button>
                </td>
              </tr>
              <tr>
                <td>Diego </td>
                <td>Vendedor</td>
                <td>3223141038</td>
                <td>02/09/2021</td>
                <td>Activo</td>
                <td>
                  <button className="btn btn-danger ">Eliminar</button>
                  <button className="btn btn-warning">Editar</button>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaginaUsuarios;
