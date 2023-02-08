import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
function Registrar(props) {
  return (
    <View style={styles.containerroot}>
      <View style={styles.header}>
        <Text style={styles.titulo1}>Bienvenido</Text>
        <Text style={styles.titulo2}>Registrate para continuar!</Text>

        <View style={styles.containerform}>
        <Text style={styles.titulo2}>Email</Text>
          <TextInput 
                style={styles.inputsform}
            
            leading={(props) => <Icon name="account" {...props} />}
          />
           <Text style={styles.titulo2}>Contraseña</Text>
          <TextInput
          
            style={styles.inputsform}
          
            variant="outlined"
            trailing={(props) => (
              <IconButton
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
           <Text style={styles.titulo2}>Repetir contraseña</Text>
          <TextInput
          
            style={styles.inputsform}
          
            variant="outlined"
            trailing={(props) => (
              <IconButton
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
              />
            )}
          />
         
        </View>
              
        <View style={styles.containerchild}>

        <TouchableOpacity   style={styles.btn} >
           <Text style={styles.text}>Registrar</Text> 
        </TouchableOpacity>

        
        </View>
        

      </View>
    </View>
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