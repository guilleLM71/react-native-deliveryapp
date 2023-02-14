import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { actionTypes } from '../../reducer/reducer';
import { useStateValue } from '../../context/StateProvider';
function Login({navigation}) {
  const [{user},dispatch]=useStateValue()
  const [datos, setDatos]=useState(
    {
      email:"",
      contraseña:"",
      vercontraseña:true,
      
    }
  )
  const [datauser,setDatauser]=useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",
    imagen:"",
    notification_token: "",
    rol_id:0,
  })
  useEffect(()=>{
   //console.log('datauser :>> ', datauser);
   //console.log('datos :>> ', datos);
  },[])

  async function login(){
    const options = {
      method: 'POST',
      url: 'http://192.168.0.15:4000/api/login',
      headers: {'Content-Type': 'application/json'},
      data: {email:datos.email,
        contraseña:datos.contraseña}
    };
    await axios(options)
    .then((response)=>{
      dispatch(
        {
          type:actionTypes.set_user,
          user:response.data.user
        }
        )
        dispatch(
          {
            type:actionTypes.set_token,
            token:response.data.token
          }
          )
      const res= response.data.user
      res.rol_id== 1? navigation.navigate('AdminPag'): 
      res.rol_id== 2? navigation.navigate('ClientePag'):
      res.rol_id== 3? navigation.navigate('DeliveryPag' ):null
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
    <View style={styles.containerroot}>
      <View style={styles.header}>
        <Text style={styles.titulo1}>Bienvenido</Text>
        <Text style={styles.titulo2}>Inicia sesion para continuar!</Text>

        <View style={styles.containerform}>
        <Text style={styles.titulo2}>Email</Text>
          <TextInput 
         
        
            style={styles.inputsform}
            onChangeText={(val)=>{setDatos({...datos,["email"]:val})}}
            leading={(props) => <Icon name="account" {...props} />}
          />
          <Text style={styles.titulo2}>Contraseña</Text>
          <TextInput
            secureTextEntry={datos.vercontraseña}
            style={styles.inputsform}
            onChangeText={(val)=>{setDatos({...datos,["contraseña"]:val})}}
            variant="outlined"
            trailing={(props) => (
              <IconButton
              onPress={()=>{setDatos({...datos,["vercontraseña"]:!datos.vercontraseña})}}
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
          
         
        </View>
        <TouchableOpacity>
        <Text style={styles.textrecpas}
            >
              Olvidaste tu contraseña?
            </Text>
        </TouchableOpacity>
       
        <View style={styles.containerchild}>

        <TouchableOpacity   style={styles.btn}
        
        onPress={()=>
        {
            login();
            
        }}>
           <Text style={styles.text}>Iniciar Sesion</Text> 
        </TouchableOpacity>

        
        </View>
        <View style={styles.containerchild}>

        <Text
              style={styles.textsignup1}
            >
              Si eres un nuevo usuario {" "}
            </Text>
            <TouchableOpacity onPress={()=>{ 
                 navigation.navigate('Registrar', {name: 'Jane'})}
               
            }>
            <Text
           style={styles.textsignup2}
            >
              Registrate
            </Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

export default Login;

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