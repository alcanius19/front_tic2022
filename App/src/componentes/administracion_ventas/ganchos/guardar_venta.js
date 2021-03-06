import { useEffect, useState } from "react";
import axios from "axios";

const useGuardar = (propiedades) => {
  const [datos, setDatos] = useState({
    ruta: propiedades.ruta,
    parametro: propiedades.parametro,
    items: propiedades.items,
    respuesta: propiedades.respuesta,
  });
  const api = axios.create({
    baseURL: process.env.API_URL || "http://localhost:4000/",
  });
  const devolverItems = (datos) => {
    console.log(Array.isArray(datos) + " " + JSON.stringify(datos));
    datos = Array.isArray(datos) ? datos : [datos];
    console.log(datos);
    return datos.length > 0 ? datos.map((item) => item) : [];
  };

  useEffect(() => {
    if (Object.values(datos.items).length > 0) {
      const timeoutId = setTimeout(() => {
        const guardar = async () => {
          try {
            console.log(datos.items);
            const res = await api.post(`${datos.ruta}`, datos.items);
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
        guardar();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [datos.items]);

  return [datos, setDatos];
};

export default useGuardar;
