import { View, TextInput, Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
};

export const FormularioParaAgregarProducto = ({
  text,
  onChangeText,
  onSubmit,
}: Props) => (
  <View style={styles.inputRow}>
    <TextInput
      value={text}
      onChangeText={onChangeText}
      placeholder="Agregar producto (ej: Leche)"
      style={styles.input}
      returnKeyType="done"
      onSubmitEditing={onSubmit}
    />
    <Pressable style={styles.addBtn} alPresionar={onSubmit}>
      <Text style={styles.addTxt}>Agregar</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
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
});