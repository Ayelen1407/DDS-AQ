import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

type Props = {
  children: string;
};

export default function TextoParaListaVacia({ children }: Props) {
  return <Text style={styles.empty}>{children}</Text>;
}
const styles = StyleSheet.create({
  empty: { textAlign: 'center', color: '#777', marginTop: 24 },
});