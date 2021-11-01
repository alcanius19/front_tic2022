import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModeloTabla = (datosTabla, setDatosTabla, alBorrarFilas) => {
  const [filaSeleccionadas, setFilaSeleccionadas] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const handleOnEdit = (content, row, rowIndex, columnIndex) => {
    const filas = filaSeleccionadas.filter((item) => item[keyid] == row[keyid]);
    return filas.length > 0 ? true : false;
  };

  const handleDelete = (row) => {
    if (filaSeleccionadas.length > 0 && filaSeleccionadas.includes(row)) {
      setDatosTabla([...datosTabla].filter((_row) => _row !== row));
      setFilaSeleccionadas(
        [...filaSeleccionadas].filter((item) => item !== row)
      );
      if (alBorrarFilas) {
        alBorrarFilas();
      }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const alGuardarFilas = (filas) => {
    return filas.map((item) => ({
      ...item,
      total: item.cantidad * item.valor_unit,
    }));
  };

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
  const onFormato = (cell, row, rowIndex, extraData) => (
    <div className="d-flex justify-content-center align-items-center">
      <button className={"btn btn-Dark"} onClick={() => handleDelete(row)}>
        <FontAwesomeIcon
          icon={["far", "trash-alt"]}
          size="1x"
          style={{ color: "black" }}
        />
      </button>
    </div>
  );
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
      dataField: "cantidad",
      text: "Cantidad",
      headerStyle: {
        textAlign: "center",
      },
      editable: handleOnEdit,
      classes: "fw-bold text-break text-wrap fs-6",
      style: { width: "100%" },
    },
    {
      dataField: "total",
      text: "Total",
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
    {
      dataField: "opciones",
      text: "...",
      editable: false,
      formatter: onFormato,
      formatExtraData: filaSeleccionadas,
      headerStyle: {
        textAlign: "center",
      },
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
