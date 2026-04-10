import { FlatList, View, Text } from "react-native";
import { Producto } from "../tipos/productos";

export default function ListaDeProductos({
  productos,
  alPresionar,
  alMantener,
}: {
  productos: Producto[];
  alPresionar: (id: string) => void;
  alMantener: (id: string) => void;
}) {
    return (
         <FlatList
      data={productos}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => (
        <ItemDeProducto
          item={item}
          alPresionar={() => alPresionar(item.id)}
          alMantener={() => alMantener(item.id)}
        />
      )}
      ListEmptyComponent={
        <Text>Sin productos. ¡Agregá el primero! 😊</Text>
      }
      ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
    />
    );}