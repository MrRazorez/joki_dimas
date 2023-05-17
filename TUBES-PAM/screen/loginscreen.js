import { Box, Image, VStack, FormControl, Text, Input, Button } from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Inputs = [
  {
    label: 'Masukan Email',
    type: 'text',
    placeholder: 'user@gmail.com',
    name: 'email'
  },
  {
    label: 'Masukan Password',
    type: 'password',
    placeholder: 'password',
    name: 'password'
  }
]

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan token ke AsyncStorage
        await AsyncStorage.setItem('token', data.token);

        // Reset navigasi, menghapus tumpukan navigasi saat ini dan menggantinya dengan tumpukan yang baru
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        // Tampilkan pesan kesalahan
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <Box bg='light.500'>
        <Box bg="#FBCFE5" alignItems="center" h={20}>
            <Image
            source={require('..//assets/TERALOVED.png')}
            alt="Logo"
            alignItems='center'
            margin={5}
            />
            <Box alignItems='center'>
                <VStack space={8} mt={5} pt={6}>
                    {/* ...input form lainnya... */}
                    {Inputs.map((i, index) => (
                        <FormControl key={index}>
                        <FormControl.Label
                            text={{ fontSize: '6px', fontWeight: 'bold' }}>
                            {i.label}
                        </FormControl.Label>
                        <Input
                            borderWidth={2}
                            bg='light.50'
                            pl={2}
                            w='80%'
                            type={i.type}
                            fontSize={20}
                            placeholder={i.placeholder}
                            borderColor='#FBCFE5'
                            value={i.name === 'email' ? email : password}
                            onChangeText={(text) => {
                            if (i.name === 'email') setEmail(text);
                            else setPassword(text);
                            }}
                        />
                    </FormControl>
                ))}
            </VStack>

            <Text my={3}>Tidak Punya Akun?</Text>
            <Pressable mt={4} onPress={() => navigation.navigate('Register')}>
                <Text color='info.400'>Daftar</Text>
            </Pressable>
            <Button h={50} my={70} w={40} rounded={20} bg='error.400' onPress={handleLogin}>Masuk</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
