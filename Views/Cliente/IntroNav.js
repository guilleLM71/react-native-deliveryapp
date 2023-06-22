import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, View } from 'react-native';
import { Icon } from "@react-native-material/core";
import ClientePag from './ClientePag';
import EditarPerfil from '../Perfil/EditarPerfil';
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <View><Text>home</Text></View>
    
  );
}
function SettingsStackScreen() {
  return (
    <View><Text>setting</Text></View>
  );
}
const Tab =  createMaterialBottomTabNavigator();;
export default function IntroNav() {
  return (
    <Tab.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color}) => {
     let iconName;
     if (route.name === 'Home') {
        iconName = focused
        ? 'home'
        : 'home';
      } else if (route.name === 'User') {
        iconName = focused
        ? 'account-settings'
        : 'account-settings';
      }else if (route.name === 'Orden') {
        iconName = focused
        ? 'shopping-outline'
        : 'shopping-outline';
      }
    
    
    return <Icon name={iconName} size={25} color={color} style={{ height: "auto" }}></Icon>
    
    },
    })}
    tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',}}
                 >
           
            <Tab.Screen name="Home" component={ClientePag} />
            <Tab.Screen name="Orden" component={EditarPerfil} />
            <Tab.Screen name="User" component={EditarPerfil} />
         
          </Tab.Navigator> 
  )
}
