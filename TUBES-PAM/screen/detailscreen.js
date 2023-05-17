import { StyleSheet, View, Image, Text, FlatList, useWindowDimensions, ScrollView, Button, Linking } from "react-native";
import { product } from "../components/data/product";

const DetailsScreen = () => {
  const selectedProduct = product[0]; // Produk yang dipilih
  const { width } = useWindowDimensions();

  const handleContactSeller = () => {
    // Logika untuk menghubungi penjual
    // Implementasikan sesuai kebutuhan Anda
    const phoneNumber = "6282179773270";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    Linking.openURL(whatsappLink);
  };

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={selectedProduct.images} // Gunakan properti images dari produk yang dipilih
          renderItem={({ item }) => (
            <Image 
              source={{ uri: `http://10.0.2.2:3000/api/image/${item}` }} 
              style={{ width, aspectRatio: 1 }} 
            />
          )}
          horizontal
          pagingEnabled
        />
        <View style={{ padding: 20 }}> 
          {/* Title */}
          <Text style={styles.title}>{selectedProduct.name}</Text>

          {/* Price */}
          <Text style={styles.price}>RP {selectedProduct.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{selectedProduct.description}</Text>
          
          {/* Hubungi Penjual Button */}
          <Button
            title="Hubungi Penjual"
            onPress={handleContactSeller}
          />
        </View>
      </ScrollView>
      {/* Add to cart button */}

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
});

export default DetailsScreen;
