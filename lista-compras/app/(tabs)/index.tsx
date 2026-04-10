
import FormularioParaProducto from './componentes/contenidos/formularioDeProductos';
import ListaDeProductos from './componentes/listaDeProductos';
import tituloDePagina from './componentes/contenidos/tituloDePagina';
import usarProductos from './hooks/usarProductosDeCompra';

export default function App() {
  const {productos,} = usarProductos();

  return (
   
  );
}