import { HStack,Input } from "native-base";
import React from "react";

function Homesearch() {
    return(
        <HStack 
        space={3} 
        w="full"
        px={6} 
        bg="light.50" 
        
        alignItems="center" 
        marginBottom={3}
        
        >
            <Input placeholder="Cari Produk ...."
             w="100%" 
             bg="error.50"
             type="search" h={12}
             mt={3}
             shadow={7}
             variant="filled"
             borderWidth={2}
             borderColor="#FBCFE5"
             alignItems="center"
             />
        
        </HStack>
    );
}

export default Homesearch;