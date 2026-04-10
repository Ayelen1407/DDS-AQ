import { View, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { tituloDePagina } from '../contenidos/tituloDePagina';
import { FormularioParaAgregarProducto } from '../contenidos/formularioDeProductos';
import { TarjetaParaItemDeCompra } from '../contenidos/TarjetaParaItemDeCompra';
import { TextoParaListaVacia } from '../contenidos/TextoParaListaVacia';
import { Item } from '../../tipos/item';

type Props = {
  items: Item[];
  text: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  onToggleItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
};

export const ContenedorDeListaDeCompras = ({
  items,
  text,
  onChangeText,
  onSubmit,
  onToggleItem,
  onRemoveItem,
}: Props) => {
  const renderItem = ({ item }: { item: Item }) => (
    <TarjetaParaItemDeCompra
      item={item}
      onPress={() => onToggleItem(item.id)}
      onLongPress={() => onRemoveItem(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <TextoParaTituloDeLista>🛒 Lista de Compras</TextoParaTituloDeLista>

      <FormularioParaAgregarProducto
        text={text}
        onChangeText={onChangeText}
        onSubmit={onSubmit}
      />

      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <TextoParaListaVacia>
            Sin productos. ¡Agregá el primero! 😊
          </TextoParaListaVacia>
        }
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
  sep: { height: 1, backgroundColor: '#eee' },
});