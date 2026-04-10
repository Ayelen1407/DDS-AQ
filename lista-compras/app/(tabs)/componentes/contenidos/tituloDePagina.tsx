import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

type Props = {
  children: string;
};

export default function tituloDePagina({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 12 },
});