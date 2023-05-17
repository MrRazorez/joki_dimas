import * as React from 'react';
import { Text, Image, Box, Heading, VStack, Center, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Hapus token dari AsyncStorage
      await AsyncStorage.removeItem('token');

      // Reset navigasi, menghapus tumpukan navigasi saat ini dan menggantinya dengan tumpukan yang baru
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
      alert('Anda telah keluar');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box bg='light.500'>
      <Box bg="#FBCFE5" alignItems="center" h={40}>
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
      
      <VStack h='full' alignItems='center' bg='light.50'>
        <Pressable onPress={() => navigation.navigate('Edit Profile')}>
          <Center margin={5} w="64" h="10" bg="light.50" rounded="md" shadow={3}>
            <Text>Edit Profil</Text>
            <Text color='muted.500' fontSize={10}>Atur Informasi Akun</Text>
          </Center>
        </Pressable>
        <Pressable onPress={handleLogout}>
          <Center margin={5} w="64" h="10" bg="light.50" rounded="md" shadow={3}>
            <Text>Log Out</Text>
            <Text color='muted.500' fontSize={10}>Keluar Akun</Text>
          </Center>
        </Pressable>
      </VStack>
    </Box>
  );
}
