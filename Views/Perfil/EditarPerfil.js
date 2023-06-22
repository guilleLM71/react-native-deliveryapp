import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useStateValue } from '../../context/StateProvider';
import axios from 'axios';

function EditarPerfil({navigation,props}) {
    const [{user,token}]=useStateValue()
    const [datos, setDatos]=useState(
        {
          nombre:user.nombre,
          apellido:user.apellido,
          telefono:user.telefono,
          email:user.email,
          rol:user.rol_id,
          contraseña:"",
          vercontraseña:true,
          ccontraseña:"",
          verccontraseña:true,
          notification_token:""
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
      async function editarperfil(){
        const options = {
          method: 'PUT',
          url: 'http://192.168.0.7:4000/api/editarperfil',
          headers: {'Content-Type': 'application/json',
                    'xx-token': token },
          data: {
            //id:user.id,
            nombre:datos.nombre,
            apellido:datos.apellido,
            telefono:datos.telefono,
        }
        };
        await axios(options)
        .then((response)=>{
          showToastWithGravityAndOffset(response.data.msg)
          //setDatauser({...res})
          //console.log('response :>> ', request.data);
          //console.log('user :>> ', datauser);
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
      });
        
      }
    return (
        <Fragment>
        <Appbar.Header>
        <Appbar.BackAction 
        onPress={() => { 
          datos.rol== 1? navigation.navigate('AdminPag'): 
          datos.rol== 2? navigation.navigate('IntroNav'):
          datos.rol== 3? navigation.navigate('DeliveryPag' ):null}} />
        <Appbar.Content title="Configuracion" />
        <Appbar.Action icon="content-save-edit" size={25} onPress={editarperfil} />
      </Appbar.Header>
   
      <View style={styles.containerform}>
        <Text style={styles.titulo2}>Nombre</Text>
          <TextInput 
                    value={datos.nombre}
                style={styles.inputsform}
                onChangeText={(val)=>{setDatos({...datos,["nombre"]:val})}}
            
          />
          <Text style={styles.titulo2}>Apellido</Text>
          <TextInput 
                value={datos.apellido}
                style={styles.inputsform}
                onChangeText={(val)=>{setDatos({...datos,["apellido"]:val})}}
            
          />
          <Text style={styles.titulo2}>Telefono</Text>
          <TextInput 
                style={styles.inputsform}
                value={datos.telefono}
                onChangeText={(val)=>{setDatos({...datos,["telefono"]:val})}}
          />
        <Text style={styles.titulo2}>Email</Text>
          <TextInput 
                inputMode='email'
                editable={false}
                style={styles.inputsform}
                value={datos.email}
            leading={(props) => <Icon name="account" {...props} />}
          />
      </View>
      </Fragment>
    );
}

export default EditarPerfil;

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
      marginTop: 60,
      color: "black",
      fontWeight: "bold",
      fontSize: 30,
    },
    titulo2: {
      marginTop: 3,
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
      marginTop: 20,
      marginHorizontal:20
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