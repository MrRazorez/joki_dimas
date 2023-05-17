import { StyleSheet } from "react-native";
import {NativeBaseProvider} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screen/homescreen';
import Navigation from "./navigation";

export default function App() {
  return(
    <NativeBaseProvider>
      {/* <Homescreen/> */}
      <Navigation/>


    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
