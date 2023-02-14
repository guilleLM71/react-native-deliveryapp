import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View , ToastAndroid} from "react-native";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
function Registrar({navigation}) {
  const [datos, setDatos]=useState(
    {
      nombre:"",
      apellido:"",
      telefono:"",
      email:"",
      contraseña:"",
      vercontraseña:true,
      ccontraseña:"",
      verccontraseña:true,
      notification_token:""
    }
  )
  useEffect(()=>{
   console.log('datos :>> ', datos);
  })
  const showToastWithGravityAndOffset = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  async function registrar(){
    const options = {
      method: 'POST',
      url: 'http://192.168.0.15:4000/api/registracliente',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify({
        nombre: datos.nombre,
        apellido: datos.apellido,
        telefono: datos.telefono,
        email:datos.email,
        contraseña:datos.contraseña,
        notification_token:datos.notification_token
      })
    };
    //if(datos.contraseña==datos.ccontraseña){
      const request= await axios(options)
      console.log('response :>> ', request.data);
      showToastWithGravityAndOffset(request.data.msg)
    //}
   
  } 
  return (
    <ScrollView>
    <View style={styles.containerroot}>
      <View style={styles.header}>
        <Text style={styles.titulo1}>Bienvenido</Text>
        <Text style={styles.titulo2}>Registrate para continuar!</Text>

        <View style={styles.containerform}>
        <Text style={styles.titulo2}>Nombre</Text>
          <TextInput 
                style={styles.inputsform}
                onChangeText={(val)=>{setDatos({...datos,["nombre"]:val})}}
            
          />
          <Text style={styles.titulo2}>Apellido</Text>
          <TextInput 
                style={styles.inputsform}
                onChangeText={(val)=>{setDatos({...datos,["apellido"]:val})}}
            
          />
          <Text style={styles.titulo2}>Telefono</Text>
          <TextInput 
                style={styles.inputsform}
            
                onChangeText={(val)=>{setDatos({...datos,["telefono"]:val})}}
          />
        <Text style={styles.titulo2}>Email</Text>
          <TextInput 
                style={styles.inputsform}
                onChangeText={(val)=>{setDatos({...datos,["email"]:val})}}
            leading={(props) => <Icon name="account" {...props} />}
          />
           <Text style={styles.titulo2}>Contraseña</Text>
          <TextInput
          onChangeText={(val)=>{setDatos({...datos,["contraseña"]:val})}}
            style={styles.inputsform}
            secureTextEntry={datos.vercontraseña}
            variant="outlined"
            trailing={(props) => (
              <IconButton
              onPress={()=>{setDatos({...datos,["vercontraseña"]:!datos.vercontraseña})}}
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
           <Text style={styles.titulo2}>Repetir contraseña</Text>
          <TextInput
          onChangeText={(val)=>{setDatos({...datos,["ccontraseña"]:val})}}
            style={styles.inputsform}
            secureTextEntry={datos.verccontraseña}
            variant="outlined"
            trailing={(props) => (
              <IconButton
              onPress={()=>{setDatos({...datos,["verccontraseña"]:!datos.verccontraseña})}}
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
         
        </View>
              
        <View style={styles.containerchild}>

        <TouchableOpacity   style={styles.btn} 
           onPress={()=>{registrar();
            navigation.navigate('Login', {name: 'Jane'})
          }}>
           <Text style={styles.text}>Registrar</Text> 
        </TouchableOpacity>

        
        </View>
        

      </View>
    </View>
    </ScrollView>
  );
}

export default Registrar;

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


/*

          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>


*/ 