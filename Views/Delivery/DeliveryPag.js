import React from "react";
import { StyleSheet, Text, View } from "react-native";

function DeliveryPag(props) {
  return (
    <View style={styles.containerroot}>
      <Text style={styles.titulo1}>Delivery</Text>

    </View>
  );
}

export default DeliveryPag;
const styles = StyleSheet.create({
    containerroot: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    containerchild: {
      flex: 0,
  
      alignItems: "center",
      justifyContent: "center",
    },
    btn: {
      flex: 0,
      alignItems: "center",
      justifyContent: "center",
      width: 140,
      height: 40,
      padding: 10,
      marginTop:20,
      margin: 10,
      fontSize: 40,
      backgroundColor: `#ffa500`,
      borderRadius: 50,
    },
  
    text: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: 15,
    },
  
    titulo1: {
      marginTop: 80,
      color: "black",
      fontWeight: "bold",
      fontSize: 30,
    },
    titulo2: {
      marginTop: 5,
      color: "grey",
      fontWeight: "bold",
      fontSize: 15,
    },
    header: {
      padding: 2,
      paddingVertical: 8,
      width: "90%",
      maxWidth: 290,
    },
    containerform: {
      flex: 0,
      marginTop: 30,
    },
    inputsform: {
      marginVertical:5
      
    },
    textrecpas:{
      fontSize:12,
      fontWeight: "500",
      color:"black",
      flex:0,
      alignSelf:"flex-end",
      marginTop:1,
      textDecorationLine:"underline"
    },
    textsignup1:{
      fontSize:13,
      fontWeight: "500",
      color:"grey",
      flex:0,
   
      marginTop:1,
  
    },
    textsignup2:{
      fontSize:13,
      fontWeight: "500",
      color:"grey",
      flex:0,
      marginTop:1,
      textDecorationLine:"underline"
    }
  });