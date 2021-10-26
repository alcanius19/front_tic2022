import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

const useUsuarios = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const extraer = async () => {
        try {
          const res = await api.get(`/usuarios`);
          setDatos((datos) => [...datos, ...res.data.map((item) => item)]);
        } catch (error) {
          console.error(error);
        }
      };
      extraer();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return [datos, setDatos];
};

export default useUsuarios;
