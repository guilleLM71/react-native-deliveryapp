import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import imagen from './assets/favicon.png'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import Intro from "./Views/Intro/Intro";
import Login from "./Views/Login/Login";
import Registrar from "./Views/Login/Registrar";
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './reducer/reducer';
import AdminPag from "./Views/Admin/AdminPag";
import ClientePag from "./Views/Cliente/ClientePag";
import DeliveryPag from "./Views/Delivery/DeliveryPag";
import EditarPerfil from "./Views/Perfil/EditarPerfil";
import CambiarContraseña from "./Views/Perfil/CambiarContraseña";
import Categorias from "./Views/Admin/Categoria/Categorias";
import AgregarCategoria from "./Views/Admin/Categoria/AgregarCategoria";
const Stack = createNativeStackNavigator();

export default function App() {
  const [num,setNum]=useState(0)
  function incremtar(){
    console.log('num :>> ', num);
    setNum(num+1)
  }
  const HomeScreen = ({navigation}) => {
    return (
      <Button

       
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
  };
  const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };
 

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Intro}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Registrar"
        component={Registrar}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="AdminPag"
        component={AdminPag}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="ClientePag"
        component={ClientePag}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="DeliveryPag"
        component={DeliveryPag}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="EditarPerfil"
        component={EditarPerfil}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CambiarContraseña"
        component={CambiarContraseña}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{ headerShown: false }}
      />

        <Stack.Screen
        name="AgregarCategoria"
        component={AgregarCategoria}
        options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  </NavigationContainer>
  </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 2,
    margin: 2,

    fontSize: 40,
  },

  titulo: {
    fontSize: 24,
  },
});
