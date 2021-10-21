import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

const useUsuarios = () => {
  const [datos, setDatos] = useState([]);

  const extraer = async () => {
    
    try {
      setTimeout(() => {});
      const res = await api.get(`/usuarios`);

      await setDatos((datos) => [...datos, ...res.data]);
    } catch (error) {
      console.error(error);
    }
  };
  extraer();

  return { datos, setDatos };
};

export default useUsuarios;
