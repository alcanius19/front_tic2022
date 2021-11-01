import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
const ModeloTabla = (datosTabla, setDatosTabla) => {
  const [filaSeleccionadas, setFilaSeleccionadas] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const onFormatoEstado = (cell, row, rowIndex, extraData) => (
    <div
      className={`m-0 fw-bold badge ${
        cell == true ? "bg-success" : "bg-danger"
      } text-wrap`}
      style={{ width: "6rem" }}
    >
      {cell == true ? "Activo" : "Inactivo"}
    </div>
  );

  // eslint-disable-next-line no-unused-vars
  const alGuardarFilas = (oldValue, newValue, row, column) => {
    console.log("After Saving Cell!!");
  };

  const keyid = "_id";
  const columnas = [
    {
      dataField: keyid,
      text: "ID producto",
      sort: true,
      headerStyle: {
        textAlign: "center",
      },
      classes: "fw-bold text-break ",
      editable: false,
    },
    {
      dataField: "descripcion",
      text: "Descripción",
      sort: true,
      headerStyle: {
        textAlign: "center",
      },
      editable: false,
      classes: "fw-bold",
    },
    {
      dataField: "valor_unit",
      text: "Valor unitario",
      headerStyle: {
        textAlign: "center",
      },
      editable: false,
      classes: "fw-bold text-break text-wrap fs-6",
      style: { width: "100%" },
    },
    {
      dataField: "estado",
      text: "Estado",
      headerStyle: {
        textAlign: "center",
      },
      formatter: onFormatoEstado,
      editable: false,
      classes: "fw-bold text-wrap fs-6",
    },
    {
      dataField: "stock",
      text: "Stock",
      headerStyle: {
        textAlign: "center",
      },
      editable: false,
      //formatter: onFormatoEstado,
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
