import { useEffect, useState } from "react";
import axios from "axios";

const useExtraer = (propiedades) => {
  const [datos, setDatos] = useState({
    ruta: propiedades.ruta,
    parametro: propiedades.parametro,
    items: propiedades.items,
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
    if (datos.parametro !== "") {
      const timeoutId = setTimeout(() => {
        const extraer = async () => {
          try {
            console.log(`${datos.ruta}/${datos.parametro}`);
            const res = await api.get(`${datos.ruta}/${datos.parametro}`);
            let respuesta = res.data;
            if (respuesta) {
              respuesta = devolverItems(res.data);
            } else {
              respuesta = [];
            }
            setDatos((datos) => ({
              ...datos,
              parametro: "",
              items: respuesta,
            }));
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.error(JSON.stringify(error));
          }
        };
        extraer();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [datos.parametro]);

  return [datos, setDatos];
};

export default useExtraer;
