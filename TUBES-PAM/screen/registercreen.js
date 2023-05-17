import { Box ,Image, VStack ,FormControl,Text ,Input,Button} from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Inputs = [
    {
        label:'Masukan Email',
        type:'text',
        placeholder:'user@gmail.com',
    },
    {
        label:'Masukan Password',
        type:'password',
        placeholder:'password',
    },
    {
        label:'Konfirmasi Password',
        type:'password',
        placeholder:'konfirmasi password',
    }
]

const Register = ()=>{

    const navigation = useNavigation();

    return(             //#FBCEFE5
        <Box  bg='light.500'>
            <Box bg="#FBCFE5" alignItems="center" h={20}>
                <Image
                source={require('..//assets/TERALOVED.png')}
                alt="Logo"
                alignItems='center'
                margin={5}
                 />
                    <Box alignItems='center'>
                        <VStack space={8} mt={5} pt={6} >
                          {
                            Inputs.map((i,index) =>( 
                            <FormControl key={index}>
                                <FormControl.Label 
                                    text={{fontSize :'6px',
                                    fontWeight :'bold',}}>
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
                                      />
                            </FormControl>
                                  ))
                                 }
                             
                            </VStack>
                            <Text my={3}>Sudah Memiliki Akun?</Text>
                            <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
                            <Text color='info.400'>Masuk</Text>
                            </Pressable>
                            <Pressable >
                            <Button h={50} my={10} w={40} rounded={20} bg='error.400'onPress={() => {navigation.navigate('Login'); alert("Akun berhasil Terdaftar!")}}>Daftar</Button>
                            </Pressable>
                    </Box>
            </Box>  
         </Box>
    );
}

export default Register;