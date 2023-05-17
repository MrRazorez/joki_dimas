import React, { useState } from "react";
import {
  FormControl,
  Input,
  Stack,
  Text,
  Divider,
  Box,
  ScrollView,
  Center,
  Image,
  Button,
  NativeBaseProvider,
} from "native-base";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Upload() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedFile(result.assets);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append('images', {
      uri: selectedFile[0].uri,
      name: selectedFile[0].uri.substring(selectedFile[0].uri.lastIndexOf('/') + 1),
      type: 'image/*', // Ganti sesuai tipe gambar yang ingin Anda unggah
    });
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('lokasi', lokasi)
    return formData;
  };

  const handleUpload = async () => {
    try {
      const formData = createFormData();
      const response = await axios.post('http://10.0.2.2:3000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        setName('');
        setDescription('');
        setPrice('');
        setLokasi('');
        setSelectedFile(null);
        navigation.navigate('Posting');
        alert("Tawaran diunggah!");
      } else {
        throw new Error('Upload Failed');
      }
    } catch (error) {
      console.error(error);
      alert('Upload Failed');
    }    
  };

  return (
    <ScrollView w="100%">
      <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <Box>
          <FormControl mb="5">
            <FormControl.Label>Judul</FormControl.Label>
            <Input placeholder="Masukkan judul tawaran Anda." value={name} onChangeText={text => setName(text)}/>
            <FormControl.HelperText>
              Berikan judul pada tawaran Anda.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Harga</FormControl.Label>
            <Input
              keyboardType="numeric"
              placeholder="Masukkan harga tawaran Anda."
              value={price.toString()}
              onChangeText={text => setPrice(text)}
            />
            <FormControl.HelperText>
              Masukkan harga tawaran dalam rupiah.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Lokasi</FormControl.Label>
            <Input placeholder="Masukkan lokasi Anda." value={lokasi} onChangeText={text => setLokasi(text)} />
            <FormControl.HelperText>
              Masukkan lokasi tawaran Anda.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Deskripsi</FormControl.Label>
            <Input placeholder="Masukkan deskripsi tawaran" value={description} onChangeText={text => setDescription(text)}/>
            <FormControl.HelperText>
              Berikan deskripsi singkat mengenai tawaran Anda.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Unggah File</FormControl.Label>
            <Button onPress={handleFileSelect} colorScheme="primary">
              Pilih File
            </Button>
            {selectedFile && (
              <Box mt="3">
                <Text>{selectedFile[0].uri.substring(selectedFile[0].uri.lastIndexOf('/') + 1)}</Text>
                <Button onPress={handleClearFile} mt="3" size="sm">
                  Hapus File
                </Button>
              </Box>
            )}
          </FormControl>
          <Divider />
          <Center>
            <Button  mt={5} bg="#FBCFE5" onPress={handleUpload}>Unggah</Button>
          </Center>
        </Box>
      </Stack>
    </ScrollView>
  );
}

