import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useStateValue } from "../../context/StateProvider";
function AdminPag({navigation,props}) {
  const [{user},dispatch]=useStateValue()
  return (
 
    <View style={styles.containerroot}>
      <Text style={styles.titulo1}>{user.nombre +" "+ user.apellido}</Text>
      <Text style={styles.titulo2}>{user.email}</Text>
      <Text style={styles.textsignup1}>Cuenta</Text>
      <View style={styles.containerchild}>
      
          <TouchableOpacity style={styles.btn} 
          onPress={()=>{
            navigation.navigate('EditarPerfil') 
          }}>
           <View style={{flex:1, flexDirection:"row", justifyContent:"center", gap:10}}>
           <Icon name="account"  size={25} {...props} />
          <Text style={styles.text}>Opciones de Perfil</Text>
          </View>
          <Icon name="arrow-right"  size={25} {...props} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} 
           onPress={()=>{
            navigation.navigate('CambiarContraseña') 
          }}
          >
           <View style={{flex:1, flexDirection:"row", justifyContent:"center", gap:10}}>
           <Icon name="lock"  size={25} {...props} />
          <Text style={styles.text}>Cambiar contraseña</Text>
          </View>
          <Icon name="arrow-right"  size={25} {...props} />
          </TouchableOpacity>
      </View>
      <Text style={styles.textsignup1}>Espacio Admin</Text>
      <View style={styles.containerchild}>
      
          <TouchableOpacity style={styles.btn}
           onPress={()=>{
            navigation.navigate('Categorias') 
          }} >
           <View style={{flex:1, flexDirection:"row", justifyContent:"center", gap:10}}>
           <Icon name="group"  size={25} {...props} />
          <Text style={styles.text}>Categorias</Text>
          </View>
          <Icon name="arrow-right"  size={25} {...props} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} 
           onPress={()=>{
            navigation.navigate('Productos') 
          }}>
           <View style={{flex:1, flexDirection:"row", justifyContent:"center", gap:10}}>
           <Icon name="food"  size={25} {...props} />
          <Text style={styles.text}>Productos</Text>
          </View>
          <Icon name="arrow-right"  size={25} {...props} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} 
          onPress={()=>{
            navigation.navigate('Deliverys') 
          }}
          
          >
           <View style={{flex:1, flexDirection:"row", justifyContent:"center", gap:10}}>
           <Icon name="truck-delivery"  size={25} {...props} />
          <Text style={styles.text}>Deliverys</Text>
          </View>
          <Icon name="arrow-right"  size={25} {...props} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} 
          onPress={()=>{
            navigation.navigate('Ordenes') 
          }}
          >
           <View style={{flex:1, flexDirection:"row", justifyContent:"center", gap:10}}>
           <Icon name="note"  size={25} {...props} />
          <Text style={styles.text}>Ordenes</Text>
          </View>
          <Icon name="arrow-right"  size={25} {...props} />
          </TouchableOpacity>
      </View>
    </View>

  );
}

export default AdminPag;
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
      marginTop: 15,
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
  