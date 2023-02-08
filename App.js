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
     
    </Stack.Navigator>
  </NavigationContainer>
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
