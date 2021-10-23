import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModeloTabla = (datos) => {
  const [filaSeleccionadas, setFilaSeleccionadas] = useState([]);
  const [datosTabla, setDatosTabla] = useState(datos);

  // eslint-disable-next-line no-unused-vars
  const handleOnEdit = (content, row, rowIndex, columnIndex) => {
    return filaSeleccionadas.length > 0 && filaSeleccionadas.includes(row)
      ? true
      : false;
  };

  const handleDelete = (row) => {
    if (filaSeleccionadas.length > 0 && filaSeleccionadas.includes(row)) {
      setDatosTabla([...datosTabla].filter((_row) => _row !== row));
      setFilaSeleccionadas(
        [...filaSeleccionadas].filter((item) => item !== row)
      );
    }
  };

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
      <button className={"btn btn-Dark"}>
        <FontAwesomeIcon
          icon={["fas", "edit"]}
          size="1x"
          style={{ color: "black" }}
        />
      </button>
    </div>
  );

  const keyid = "id";
  const columnas = [
    {
      dataField: keyid,
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
      dataField: "precio",
      text: "Precio/U",
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
      formatExtraData: filaSeleccionadas,
      headerStyle: {
        textAlign: "center",
      },
    },
  ];

  return [
    keyid,
    columnas,
    filaSeleccionadas,
    setFilaSeleccionadas,
    datosTabla,
    setDatosTabla,
  ];
};

export default ModeloTabla;
