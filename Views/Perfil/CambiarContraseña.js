
import { IconButton, TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useStateValue } from '../../context/StateProvider';
import axios from 'axios';

function CambiarContraseña({navigation,props}) {
    const [{user,token}]=useStateValue()
    const [datos, setDatos]=useState(
        {
          contraseñaactual:"",
          vercontraseñaactual:true,
          
          contraseñanueva:"",
          vercontraseñanueva:true,

          ccontraseñanueva:"",
          verccontraseñanueva:true,

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
      async function cambiarContraseña(){
        const options = {
          method: 'PUT',
          url: 'http://192.168.0.15:4000/api/cambiarcontras',
          headers: {'Content-Type': 'application/json',
                    'xx-token': token },
          data: {
            //id:user.id,
            contraseñaanterior:datos.contraseñaactual,
            contraseñanueva:datos.contraseñanueva,

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
        <Appbar.BackAction onPress={() => { navigation.navigate('AdminPag')}} />
        <Appbar.Content title="Configuracion" />
        <Appbar.Action icon="content-save-edit" size={25} onPress={cambiarContraseña} />
      </Appbar.Header>
   
      <View style={styles.containerform}>
      <Text style={styles.titulo2}>Contraseña Actual</Text>
          <TextInput
          onChangeText={(val)=>{setDatos({...datos,["contraseñaactual"]:val})}}
            style={styles.inputsform}
            secureTextEntry={datos.vercontraseñaactual}
            variant="outlined"
            trailing={(props) => (
              <IconButton
              onPress={()=>{setDatos({...datos,["vercontraseñaactual"]:!datos.vercontraseñaactual})}}
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
           <Text style={styles.titulo2}>Nueva contraseña</Text>
          <TextInput
          onChangeText={(val)=>{setDatos({...datos,["contraseñanueva"]:val})}}
            style={styles.inputsform}
            secureTextEntry={datos.vercontraseñanueva}
            variant="outlined"
            trailing={(props) => (
              <IconButton
              onPress={()=>{setDatos({...datos,["vercontraseñanueva"]:!datos.vercontraseñanueva})}}
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />

<Text style={styles.titulo2}>Repetir nueva contraseña</Text>
          <TextInput
          onChangeText={(val)=>{setDatos({...datos,["ccontraseñanueva"]:val})}}
            style={styles.inputsform}
            secureTextEntry={datos.verccontraseñanueva}
            variant="outlined"
            trailing={(props) => (
              <IconButton
              onPress={()=>{setDatos({...datos,["verccontraseñanueva"]:!datos.verccontraseñanueva})}}
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
      </View>
      </Fragment>
    );
}

export default CambiarContraseña;

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