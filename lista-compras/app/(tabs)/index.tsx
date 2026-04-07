import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';

type Producto = {
  id: string;
  name: string;
  done: boolean;
};

export default function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [text, setText] = useState('');

  const AgregarProductoEnLista = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setProductos((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);
    setText('');
  };

  const CambiarEstadoDelProducto = (id: string) => {
    setProductos((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  };

  const EliminarProductoDeLista = (id: string) => { //elimina un producto de la lista
    setProductos((prev) => prev.filter((it) => it.id !== id));
  };

  const ItemParaListaDeCompra = ({ item }: { item: Producto }) => (
    <Pressable
      onPress={() => CambiarEstadoDelProducto(item.id)}
      onLongPress={() => EliminarProductoDeLista(item.id)}
      style={styles.row}
    >
      <Text style={[styles.rowText, item.done && styles.done]}>
        {item.name}
      </Text>
      <Text style={[styles.pill, item.done ? styles.pillDone : styles.pillTodo]}>
        {item.done ? '✔' : '•'}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Lista de Compras</Text>

      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Agregar producto (ej: Leche)"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={AgregarProductoEnLista}
        />
        <Pressable style={styles.addBtn} onPress={AgregarProductoEnLista}>
          <Text style={styles.addTxt}>Agregar</Text>
        </Pressable>
      </View>

      <FlatList
        data={productos}
        keyExtractor={(it) => it.id}
        renderItem={ItemParaListaDeCompra}
        ListEmptyComponent={
          <Text style={styles.empty}>Sin productos. ¡Agregá el primero! 😊</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 12 },
  inputRow: { flexDirection: 'row', gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  addBtn: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTxt: { color: '#fff', fontWeight: '600' },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#999' },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  pillTodo: { backgroundColor: '#eee', color: '#666' },
  pillDone: { backgroundColor: '#2ecc71', color: '#fff' },
  sep: { height: 1, backgroundColor: '#eee' },
  empty: { textAlign: 'center', color: '#777', marginTop: 24 },
});