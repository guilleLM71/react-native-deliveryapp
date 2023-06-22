import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useStateValue } from '../../../context/StateProvider';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
function Categorias({navigation, props}) {

    const [{user,token}]=useStateValue()
    const [categorias,setCategorias]=useState([])
    useEffect(()=>{
        getcategorias()
    },[])
    async function getcategorias(){

        const options = {
            method: 'GET',
            url: 'http://192.168.0.10:4000/api/getcategorias',
            headers: {'Content-Type': 'application/json',
                      'xx-token': token },
           
          };
          await axios(options)
          .then((response)=>{
            console.log('response :>> ', response.data.categorias);
            setCategorias(response.data.categorias)
            console.log('categorias :>> ', categorias);
            //showToastWithGravityAndOffset()
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
        <Appbar.Content title="Categorias" />
        <Appbar.Action icon="plus" size={25} 
            onPress={() => { navigation.navigate('AgregarCategoria',{render:getcategorias})}} />
      </Appbar.Header>
      {
        categorias.map((categoria)=>{
           return <TouchableOpacity style={styles.btn} key={categoria.id}>
            <View style={{flex:1, flexDirection:"row", justifyContent:"center", gap:10}}>
            <Icon name="group"  size={25} {...props} />
                <Text style={styles.text}>{categoria.categoria}</Text>
           </View>
           </TouchableOpacity>
        })
      }
        
      </Fragment>
    );
}

export default Categorias;

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
  