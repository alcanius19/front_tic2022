import React, { useState } from "react";
import useExtraer from "../ganchos/extraerInicio";

// eslint-disable-next-line no-unused-vars
const ModeloTabla = (datosTabla, setDatosTabla) => {
  const [filaSeleccionadas, setFilaSeleccionadas] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [usuarios, setUsuarios] = useExtraer("/api/usuarios");

  // eslint-disable-next-line no-unused-vars
  const onFormatoEstado = (cell, row, rowIndex, extraData) => (
    <div
      className="m-0 fw-bold badge bg-dark text-wrap"
      style={{ width: "6rem" }}
    >
      {cell == 1 ? "En proceso" : cell == 2 ? "Cancelada" : "Entregada"}
    </div>
  );

  // eslint-disable-next-line no-unused-vars
  const onFormatoVendedor = (cell, row, rowIndex, extraData) => (
    <div>
      {usuarios.length > 0
        ? usuarios.filter((usuario) => usuario._id == cell)[0].nombre
        : null}
    </div>
  );

  // eslint-disable-next-line no-unused-vars
  const alGuardarFilas = (oldValue, newValue, row, column) => {
    console.log("After Saving Cell!!");
  };
  const keyid = "codigo";
  const columnas = [
    {
      dataField: keyid,
      text: "ID Venta",
      sort: true,
      headerStyle: {
        textAlign: "center",
      },
      classes: "fw-bold text-break ",
      editable: false,
    },
    {
      dataField: "cliente",
      text: "Cliente",
      sort: true,
      headerStyle: {
        textAlign: "center",
      },
      editable: false,
      classes: "fw-bold",
    },
    {
      dataField: "id_vendedor",
      text: "Vendedor",
      headerStyle: {
        textAlign: "center",
      },
      editable: false,
      classes: "fw-bold text-break text-wrap fs-6",
      style: { width: "100%" },
      formatter: onFormatoVendedor,
    },
    {
      dataField: "total",
      text: "Total",
      headerStyle: {
        textAlign: "center",
      },
      editable: false,
      classes: "fw-bold text-wrap fs-6",
    },
    {
      dataField: "estado",
      text: "Estado",
      headerStyle: {
        textAlign: "center",
      },
      editable: false,
      formatter: onFormatoEstado,
      classes: "text-center",
    },
  ];

  return [
    keyid,
    columnas,
    alGuardarFilas,
    filaSeleccionadas,
    setFilaSeleccionadas,
  ];
};

export default ModeloTabla;
