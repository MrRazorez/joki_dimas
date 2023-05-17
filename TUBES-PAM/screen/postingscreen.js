import React, { useState } from 'react';
import { Button, Box, Image, Heading, Pressable, Text, View, ScrollView, Flex, useToast } from 'native-base';
import { product } from "../components/data/product";
import { useNavigation } from '@react-navigation/native';

export default function Posting({ name, profilePic, bio }) {
  const toast = useToast();
  const navigation = useNavigation();
  const [isSold, setIsSold] = useState(false);

  const handleSellButtonClick = () => {
    setIsSold(true);
    toast.show({
      description: "Terjual"
    });
  };

  return (
    <>
      <Box bg="#FBCFE5" alignItems="center" h={40} marginBottom={3}>
        <Image
          source={require('..//assets/profilIcon.jpg')}
          alignItems='center'
          alt='profile'
          w={20}
          h={20}
          margin={5}
          resizeMode='cover'
        />
        <Heading bold fontSize={15} color='#000000'>
          Cahya Cantik
        </Heading> 
      </Box>
      <Text
        style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 20, marginTop:5 }}
      >
        Semua tawaran
      </Text>
      <View
        style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}
      >
        <ScrollView
          flex={1}
          style={{ marginRight: 5 }}
        >
          <Flex
            flexWrap="wrap"
            direction="column"
            px={5}
          >
            {product.map((product) => (
              <Pressable
                key={product._id}
                width="100%"
                bg="secondary.50"
                rounded="md"
                shadow={2}
                my={3}
                pb={2}
                overflow="hidden"
              >
                <Image
                  source={{ uri: `http://10.0.2.2:3000/api/image/${product.image}` }}
                  alt={product.name}
                  w="full"
                  h="40"
                />
                <Box pt={1}>
                  {!isSold && (
                    <Button
                      bg="#FBCFE5"
                      onPress={handleSellButtonClick}
                    >
                      Tandai Sebagai Terjual
                    </Button>
                  )}
                  {isSold && (
                    <Button
                      bg="gray.400"
                      disabled
                    >
                      Telah Terjual
                    </Button>
                  )}
                  <Heading size="sm" bold>
                    {product.name}
                  </Heading>
                  <Text fontSize={10} mt={1} isTruncated w="full">
                    RP{product.price}
                  </Text>
                  <Text fontSize={10} isTruncated w="full">
                    {product.lokasi}
                  </Text>
                </Box>
              </Pressable>
            ))}
          </Flex>
          <View
            style={{ width: '100%', alignItems: 'center' }}
          >
            <Button my={2} onPress={() => navigation.navigate('Upload')} >Tambah Penawaran</Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
