import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginacion from "./Paginacion";
import modelo_seleccion from "./ModeloSeleccion";
import { PropTypes } from "prop-types";

const Tabla = ({
  datos,
  setDatos,
  modelo,
  modo,
  metodoSeleccion,
  alBorrarFilas,
}) => {
  const [
    keyid,
    columnas,
    alGuardarFilas,
    filasSeleccionadas,
    setFilasSeleccionadas,
  ] = modelo(datos, setDatos, alBorrarFilas);
  // eslint-disable-next-line no-unused-vars
  const [opcionesSeleccion, seleccionar, setSeleccionar] = modelo_seleccion(
    modo,
    keyid,
    [filasSeleccionadas, setFilasSeleccionadas]
  );
  useEffect(() => {
    if (filasSeleccionadas?.length && filasSeleccionadas.length > 0) {
      metodoSeleccion(filasSeleccionadas);
    }
  }, [filasSeleccionadas]);

  const onTableChange = (
    type,
    { data, cellEdit: { rowId, dataField, newValue } }
  ) => {
    setTimeout(() => {
      const resultado = data.map((row) => {
        if (row[keyid] === rowId) {
          const newRow = { ...row };
          newRow[dataField] = newValue;
          return newRow;
        }
        return row;
      });
      if (resultado.length > 0) {
        const resultados = alGuardarFilas(resultado);
        setDatos([...resultados]);
        setFilasSeleccionadas([]);
        setSeleccionar([]);
      } else {
        setDatos([...data]);
      }
    }, 1000);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDataChange = ({ dataSize }) => {
    console.log("Hi");
    setSeleccionar([0]);
  };

  return (
    <BootstrapTable
      remote={{ cellEdit: true }}
      keyField={keyid}
      data={datos}
      columns={columnas}
      selectRow={opcionesSeleccion}
      cellEdit={cellEditFactory({
        mode: "click",
        blurToSave: true,
      })}
      pagination={paginationFactory(paginacion(datos))}
      onTableChange={onTableChange}
      onDataSizeChange={handleDataChange}
      noDataIndication={"Sin resultados."}
    />
  );
};

Tabla.propTypes = {
  datos: PropTypes.array.isRequired,
  setDatos: PropTypes.func.isRequired,
  modelo: PropTypes.func.isRequired,
  modo: PropTypes.string.isRequired,
  metodoSeleccion: PropTypes.func.isRequired,
  alBorrarFilas: PropTypes.func,
};

export default Tabla;
