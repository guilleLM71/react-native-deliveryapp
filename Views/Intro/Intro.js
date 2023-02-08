import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import logo from '../../assets/food-delivery-marker.png'

function Intro({navigation}) {
    return (
       <View style={styles.containerroot}>

            <Text style={styles.titulo1}>
                DeliAPP
            </Text>

            <View style={styles.containerchild}>
             <Image source={logo}
             ></Image>       

            <TouchableOpacity style={styles.btn}
                onPress={()=>{
                    navigation.navigate('Login', {name: 'Jane'})
                }}
                >
                 <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            </View>
       </View>
    );
}

export default Intro;

const styles = StyleSheet.create({  

  containerroot: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
 
  },
  containerchild: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex:0,
    alignItems: "center",
    justifyContent: "center",
    width:160,
    height:50,
    padding: 10,
    margin: 10,
    fontSize: 40,
    backgroundColor:`#ffa500`,
    borderRadius:50
  },

  text: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    color:"white",
    fontWeight:"bold",
    fontSize: 20,
  },

  titulo1: {
    marginTop:80,
    color:"black",
    fontWeight:"bold",
    fontSize: 30,
  },

})
