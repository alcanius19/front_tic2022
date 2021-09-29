import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:4000/",
});

const useExtraer = () => {
  const [datos, setDatos] = useState({
    roles: [],
  });

  const extraer = async () => {
    try {
      const res = await api.get(`/${"roles"}`);
      console.log(res.data);
      setDatos({ ...datos, roles: res.data });
    } catch (error) {
      console.error(error);
    }
  };
  extraer();

  return { datos, setDatos };
};

export default useExtraer;
