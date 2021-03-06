import { useEffect, useState, useRef } from "react";

const useMensajes = () => {
  const [mensajeAlerta, setMensajeAlerta] = useState({
    id: 0,
    titulo: "",
    mensaje: "",
    tiempo: 0,
  });
  const [pila, setPila] = useState([]);

  const renderInicialMensaje = useRef(true);
  const renderInicialPila = useRef(true);

  useEffect(() => {
    if (renderInicialMensaje.current) {
      renderInicialMensaje.current = false;
    } else {
      setPila([...pila, { ...mensajeAlerta, id: mensajeAlerta.id + 1 }]);
    }
  }, [mensajeAlerta]);

  useEffect(() => {
    if (renderInicialPila.current) {
      renderInicialPila.current = false;
    } else {
      console.log(pila);
    }
  }, [pila.length]);

  return [mensajeAlerta, setMensajeAlerta, pila, setPila];
};

export default useMensajes;
