import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Product } from '../data/products';

export function ProductItem({ product, onPress }: any) {
  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={{ uri: product.image }} style={{ width: 60, height: 60 }} />
        <View style={{ marginLeft: 10 }}>
          <Text>{product.name}</Text>
          <Text>${product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}