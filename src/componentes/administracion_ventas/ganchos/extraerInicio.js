import { useEffect, useState } from "react";
import axios from "axios";

const useExtraer = (ruta) => {
  const [datos, setDatos] = useState([]);
  const api = axios.create({
    baseURL: "http://localhost:4000/",
  });

  useEffect(() => {
    if (datos.length == 0) {
      const timeoutId = setTimeout(() => {
        const extraer = async () => {
          try {
            const res = await api.get(`${ruta}`);
            //console.log(res.data);
            setDatos((datos) => [...datos, ...res.data.map((item) => item)]);
          } catch (error) {
            console.error(error);
          }
        };
        extraer();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [datos.length]);

  return [datos, setDatos];
};

export default useExtraer;
