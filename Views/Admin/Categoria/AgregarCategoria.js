import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useStateValue } from '../../../context/StateProvider';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TextInput } from '@react-native-material/core';
function AgregarCategoria({navigation,props,route}) {
    const [{user,token}]=useStateValue()
    const [datos, setDatos]=useState(
        {
          categoria:"",
          descripcion:"",
        
        }
      )
      const showToastWithGravityAndOffset = (msg) => {
        ToastAndroid.showWithGravityAndOffset(
          msg,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      };
      async function agregarcategoria() {
        const options = {
            method: 'POST',
            url: 'http://192.168.0.7:4000/api/addcategorias',
            headers: {'Content-Type': 'application/json',
                        'xx-token':token},
            data: JSON.stringify({
              categoria: datos.categoria,
              descripcion: datos.descripcion,
           
            })
          };
          //if(datos.contraseña==datos.ccontraseña){
            const request= await axios(options)
            console.log('response :>> ', request.data);
            showToastWithGravityAndOffset(request.data.msg)
          //}
          route.params.render()
      }
    return (
<Fragment>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => { navigation.navigate('Categorias')}} />
        <Appbar.Content title="Categorias" />
        <Appbar.Action icon="content-save-edit" size={25} 
            onPress={() => { agregarcategoria()}} />
      </Appbar.Header>
        <View style={styles.containerform}>
        <Text style={styles.titulo2}>Categoria</Text>
          <TextInput 
                style={styles.inputsform}
                onChangeText={(val)=>{setDatos({...datos,["categoria"]:val})}}
            
          />
          <Text style={styles.titulo2}>Descripcion</Text>
          <TextInput 
                style={styles.inputsform}
                onChangeText={(val)=>{setDatos({...datos,["descripcion"]:val})}}
            
          />
          
      </View>
      </Fragment>
    );
}

export default AgregarCategoria;

const styles = StyleSheet.create({
    containerroot: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    containerchild: {
      flex: 0,
      width: "100%",

      paddingHorizontal:6,
      paddingVertical:2,
      alignItems: "center",

    },
    btn: {
      flex:0,
      flexDirection:"row",
      alignItems: "center",
      justifyContent: "space-between",
      width: '100%',
      height: 50,
      paddingHorizontal: 20,
      marginTop:10,
   
      fontSize: 40,
      backgroundColor: `#ffa500`,
      borderRadius: 50,
    },
  
    text: {

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
      marginTop:10,
      paddingTop:10,
      fontSize:18,
      paddingLeft:10,
      fontWeight: "500",
      color:"grey",
      flex:0,
      alignSelf:"flex-start",
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
  