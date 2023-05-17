import { Box, Text, View ,Image} from "native-base";
import React from "react";
import Homesearch from "../components/homesearch";
import Homeproduct from "../components/homeproduct";

export default function Homescreen () {
    return(
        <Box flex={1} bg="light.50" alignItems="center">
         <Homesearch/>
         <Image source={require("..//assets/logo.jpg")}
          alt="Logo"
          style={{ width: 400, height: 200 }}
         />
         
         <Homeproduct/>
         
        </Box>
       
    )
}

