import { useState } from "react";
import { Producto } from "../tipos/productos";
export default function usarProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  const AgregarProductoEnLista = (text : string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setProductos((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);
  };

    const CambiarEstadoDelProducto = (id: string) => {
    setProductos((prev) =>
     prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  };

    const EliminarProductoDeLista = (id: string) => { //elimina un producto de la lista
       setProductos((prev) => prev.filter((it) => it.id !== id));
    };

    return {
        productos,
        AgregarProductoEnLista,
        CambiarEstadoDelProducto,
        EliminarProductoDeLista
    };
}