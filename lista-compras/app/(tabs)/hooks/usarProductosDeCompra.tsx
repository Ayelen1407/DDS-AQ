import { useState } from "react";
import { Producto } from "../tipos/productos";

export default function usarProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [texto, setTexto] = useState('');

  const agregarProductoEnLista = (text : string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setProductos((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);
    setTexto('');
  };

    const cambiarEstadoDelProducto = (id: string) => {
    setProductos((prev) =>
     prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  };

    const eliminarProductoDeLista = (id: string) => {
       setProductos((prev) => prev.filter((it) => it.id !== id));
    };

    return {
        productos,
        texto,
        setTexto,
        agregarProductoEnLista,
        cambiarEstadoDelProducto,
        eliminarProductoDeLista
    };
};