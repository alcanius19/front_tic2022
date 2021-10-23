import { useEffect, useState } from "react";
import axios from "axios";

const useEliminar = (propiedades) => {
  const [datos, setDatos] = useState({
    ruta: propiedades.ruta,
    parametro: propiedades.parametro,
    items: propiedades.items,
    respuesta: propiedades.respuesta,
  });
  const [respuesta, setRespuesta] = useState({});
  const api = axios.create({
    baseURL: "http://localhost:4000/",
  });

  const devolverItems = (datos) => {
    console.log(Array.isArray(datos) + " " + JSON.stringify(datos));
    datos = Array.isArray(datos) ? datos : [datos];
    console.log(datos);
    return datos.length > 0 ? datos.map((item) => item) : [];
  };

  useEffect(() => {
    if (datos.parametro !== "") {
      const timeoutId = setTimeout(() => {
        const eliminar = async () => {
          try {
            const res = await api.delete(
              `${datos.ruta}/codigo/${datos.parametro}`
            );
            let respuesta = res.data;
            if (respuesta) {
              respuesta = devolverItems(res.data);
            } else {
              respuesta = [];
            }
            setDatos((datos) => ({
              ...datos,
              respuesta,
            }));
          } catch (error) {
            console.error(error);
          }
        };
        eliminar();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [datos.parametro]);

  return [datos, setDatos, respuesta, setRespuesta];
};
export default useEliminar;
