import React from "react";
import { Box,FormControl,Input,ScrollView,VStack,Button } from "native-base";


const Inputs = [
    {
        label:'USERNAME',
        type:'text',
    },
    {
        label:'EMAIL',
        type:'text',
    },
    {
        label:'NO.TELEPON',
        type:'text',
    },
    {
        label:'PASSWORD',
        type:'password',
    },
    {
        label:'KONFIRMASI PASSWORD',
        type:'password',
    }
]

const Editprofile = () =>{
return(
<Box h='full' bg='light.50' px={5}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <VStack space={10} mt={5} pb={10}>
        {
            Inputs.map((i,index) =>( 
            <FormControl key={index}>
                <FormControl.Label 
                text={{fontSize :'12px',
                fontWeight :'bold',
                }}>
                {i.label}
                </FormControl.Label>
            <Input
              borderWidth={2}
              bg='error.50'
              py={4}
              type={i.type}
              fontSize={20}
              borderColor='#FBCFE5'
              />
        </FormControl>
            ))
        }
        <Button bg='#FBCFE5' color='light.50'>UPDATE PROFIL</Button>
    </VStack>
    </ScrollView>
</Box>

);
}

export default Editprofile;