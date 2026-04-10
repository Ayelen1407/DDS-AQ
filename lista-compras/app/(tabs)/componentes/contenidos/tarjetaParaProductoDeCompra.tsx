import { Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Producto } from '../../tipos/productos';

type Props = {
  item: Producto;
  onPress: () => void;
  onLongPress: () => void;
};

export const TarjetaParaItemDeCompra = ({
  item,
  onPress,
  onLongPress,
}: Props) => (
  <Pressable
    alPresionar={onPress}
    alMantener={onLongPress}
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

const styles = StyleSheet.create({
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
});