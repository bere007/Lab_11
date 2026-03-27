import { View, Text, Image } from 'react-native';

export function ProductDetailScreen({ route }: any) {
  const { product } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
    </View>
  );
}