import { View, FlatList, Text } from 'react-native';
import { products } from '../data/products';
import { ProductItem } from '../components/ProductItem';

export function ProductListScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={(product: any) =>
              navigation.navigate('ProductDetail', { product })
            }
          />
        )}
      />
    </View>
  );
}