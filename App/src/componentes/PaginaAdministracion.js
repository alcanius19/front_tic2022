import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import axios from "axios";
//import $ from "jquery";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import cellEditFactory from "react-bootstrap-table2-editor";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

export const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 1; i < quantity; i++) {
    items.push({
      id: i,
      nombre: `p ${i}`,
      descripcion: `${i}`,
      cantidad: `${i}`,
      preciou: 100 + i,
      subtotal: 100,
      iva: `0.19`,
      total: `${i}`,
    });
  }
  return items;
};

const PaginaInicio = () => {
  // const api = axios.create({
  //   baseURL: "http://localhost:4000/",
  // });
  const [productos, setProductos] = useState(productsGenerator(100));
  const [fila, setFila] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const handleOnEdit = (content, row, rowIndex, columnIndex) => {
    return fila.length > 0 && fila.includes(row) ? true : false;
  };

  // eslint-disable-next-line no-unused-vars
  const onFormato = (cell, row, rowIndex) => {
    const handleDelete = () => {
      if (fila.length > 0 && fila.includes(row)) {
        setProductos([...productos].filter((_row) => _row !== row));
        setFila([...fila].filter((item) => item !== row));
      }
    };
    return (
      <div className="d-flex justify-content-center align-items-center">
        <button className={"btn btn-Dark"} onClick={() => handleDelete(row)}>
          <FontAwesomeIcon
            icon={["far", "trash-alt"]}
            size="1x"
            style={{ color: "black" }}
          />
        </button>
        <button className={"btn btn-Dark"}>
          <FontAwesomeIcon
            icon={["fas", "edit"]}
            size="1x"
            style={{ color: "black" }}
          />
        </button>
      </div>
    );
  };
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      sort: true,
      headerStyle: {
        textAlign: "center",
      },
    },
    {
      dataField: "nombre",
      text: "Nombre",
      sort: true,
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
    },
    {
      dataField: "descripcion",
      text: "Descripción",
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
    },
    {
      dataField: "cantidad",
      text: "Cantidad",
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
    },
    {
      dataField: "preciou",
      text: "Precio/U",
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
    },
    {
      dataField: "subtotal",
      text: "Subtotal",
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
    },
    {
      dataField: "iva",
      text: "IVA",
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
    },
    {
      dataField: "total",
      text: "Total",
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
    },
    {
      dataField: "opciones",
      text: "...",
      editable: false,
      formatter: onFormato,
      formatExtraData: fila,
      headerStyle: {
        textAlign: "center",
      },
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total text-dark ps-2">
      Mostrando {from} a {to} de {size} resultados
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "Primera",
    prePageText: "Anterior",
    nextPageText: "Siguiente",
    lastPageText: "Última",
    nextPageTitle: "Primera",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: productos.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  // eslint-disable-next-line no-unused-vars
  const handleOnSelect = (row, isSelect, _rowIndex, _e) => {
    if (isSelect) {
      setFila([...fila, row]);
    } else {
      setFila([...fila].filter((item) => item !== row));
    }
  };
  const selectRow = {
    mode: "checkbox",
    clickToSelect: false,
    clickToEdit: false,
    onSelect: handleOnSelect,
  };
  useEffect(() => {
    // if (parametro !== "") {
    //   const extraer = async () => {
    //     try {
    //       const res = await api.get(`/${parametro}`);
    //       console.log(res.data);
    //       setRoles((roles) => [...roles, res.data]);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   extraer();
    // }
    //** */
    console.log(fila);
  }, [productos, fila]);

  // const obtenerRoles = () => {
  //   setParametro("roles");
  // };

  return (
    <main className="principal d-flex border-top-1 rounded-1">
      <div className="container-fluid h-100 p-1 text-white bg-light">
        <div
          className={
            "herramientas h-auto bg-light rounded-1 d-flex justify-content-center align-items-center"
          }
        >
          <div
            className={
              "d-flex justify-content-center align-items-center w-25 border-end border-1"
            }
          >
            <button className={"btn btn-light"}>
              <FontAwesomeIcon
                icon={["fas", "plus-square"]}
                size="2x"
                style={{ color: "black" }}
              />
            </button>
            <button className={"btn btn-light"}>
              <FontAwesomeIcon
                icon={["fas", "save"]}
                size="2x"
                style={{ color: "black" }}
              />
            </button>
            <button className={"btn btn-light"}>
              <FontAwesomeIcon
                icon={["fas", "search"]}
                size="2x"
                style={{ color: "black" }}
              />
            </button>
            <button className={"btn btn-light"}>
              <FontAwesomeIcon
                icon={["far", "trash-alt"]}
                size="2x"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div
            className={
              "d-flex justify-content-center align-items-center w-75 h-100 ms-2"
            }
          >
            <div className="d-flex input-group input-group-sm">
              <span className="input-group-text">ID:</span>
              <input
                type="text"
                className="form-control"
                placeholder="ID Usuario"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text">Encargado:</span>
              <select className="form-select" id="inputGroupSelect01">
                <option defaultValue>Elegir...</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className={
            "descripcion d-flex justify-content-center align-items-center"
          }
        >
          <div className="input-group input-group-sm">
            <span className="input-group-text">Descripción:</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
        <div
          className={
            "info-factura container-fluid bg-light d-flex align-items-center justify-content-center mt-1 py-2"
          }
        >
          <div
            className={
              "d-flex bg-dark rounded-3 shadow-lg flex-shrink-0 me-2 p-1"
            }
          >
            <h5 className={"fs-6 my-0 text-center text-white p-1"}>Cliente</h5>
          </div>
          <div className="d-flex input-group input-group-sm">
            <select className="form-select col-5" id="inputGroupSelect01">
              <option defaultValue>Elegir...</option>
              <option value="1">Uno</option>
              <option value="2">Dos</option>
              <option value="3">Tres</option>
            </select>
            <span className="input-group-text">Fecha inicio:</span>
            <input
              type="text"
              className="form-control"
              placeholder="Fecha inicio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text">Fecha pago:</span>
            <input
              type="text"
              className="form-control"
              placeholder="Fecha pago"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text">Total:</span>
            <input
              type="text"
              className="form-control"
              placeholder="$0.0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div
          className={
            "opciones-tabla container-fluid p-1 bg-light shadow rounded mb-2 d-flex align-items-center justify-content-center"
          }
        >
          <div>
            <button className={"btn btn-dark me-5"}>
              <FontAwesomeIcon
                icon={["fas", "plus"]}
                size="1x"
                style={{ color: "white" }}
                className={"me-1"}
              />
              Agregar producto
            </button>
          </div>
          <div>
            <button className={"btn btn-dark me-5"}>
              <FontAwesomeIcon
                icon={["fas", "minus"]}
                size="1x"
                style={{ color: "white" }}
                className={"me-1"}
              />
              Borrar producto
            </button>
          </div>
          <div>
            <form className={"input-group input-group-sm"}>
              <select
                className="form-select bg-light"
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
                className="form-control bg-light"
                id="exampleInputPassword1"
              />
              <button type="submit" className="btn btn-outline-secondary">
                <FontAwesomeIcon
                  icon={["fas", "search"]}
                  size="1x"
                  style={{ color: "black" }}
                />
              </button>
            </form>
          </div>
        </div>
        <div
          className={"tabla container-fluid overflow-auto"}
          style={{ height: 250 }}
        >
          <BootstrapTable
            keyField="id"
            data={productos}
            columns={columns}
            selectRow={selectRow}
            cellEdit={cellEditFactory({
              mode: "click",
              blurToSave: true,
              // onStartEdit: handleOnEdit,
            })}
            pagination={paginationFactory(options)}
            noDataIndication={"Sin resultados."}
          />
        </div>
      </div>
    </main>
  );
};

export default PaginaInicio;
