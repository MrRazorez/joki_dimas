import { useNavigation } from '@react-navigation/native';
import { product } from "./data/product";
import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";

function Homeproduct() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={product}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate('Product Details')}
          style={{ width: "50%", padding: 1 }}
        >
          <Image source={{ uri: `http://10.0.2.2:3000/api/image/${item.image}` }} style={styles.image} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>RP{item.price}</Text>
            <Text style={styles.productLocation}>{item.lokasi}</Text>
          </View>
        </Pressable>
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", aspectRatio: 1 },
  productInfo: { padding: 8 },
  productName: { fontSize: 16, fontWeight: "bold" },
  productPrice: { fontSize: 14 },
  productLocation: { fontSize: 12 },
});


export default Homeproduct;
