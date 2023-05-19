import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { Appbar } from "react-native-paper";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { even } from "@react-native-material/core";
function Productos({ navigation, props }) {
  const [{ user, token }] = useStateValue();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getproductos();
  }, []);
  async function getproductos() {
    const options = {
      method: "GET",
      url: "http://192.168.0.7:4000/api/listproductosadmin",
      headers: { "Content-Type": "application/json", "xx-token": token },
    };
    await axios(options)
      .then((response) => {
        console.log("response :>> ", response.data);
        setProductos(response.data.productsdb);
        console.log("productos :>> ", productos);
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

  async function deleteproductos(idproducto,event){
    event.preventDefault();
    
 const options = {
      method: "DELETE",
      url: "http://192.168.0.7:4000/api/borrarProducto/"+idproducto,
      headers: { "Content-Type": "application/json", "xx-token": token },
    };
    await axios(options)
      .then((response) => {
        console.log("response :>> ", response.data);
        //showToastWithGravityAndOffset()
        //setDatauser({...res})
        //console.log('response :>> ', request.data);
        //console.log('user :>> ', datauser);
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
      getproductos()
  }

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("AdminPag");
          }}
        />
        <Appbar.Content title="Productos" />
        <Appbar.Action
          icon="plus"
          size={25}
          onPress={() => {
            navigation.navigate("AgregarProductos", { render: getproductos });
          }}
        />
      </Appbar.Header>
      <ScrollView>
      {productos.map((producto) => {
        return (
          <View style={styles.cardproducto} key={producto.id}>
            <Image
              source={{ uri: "http://192.168.0.7:4000/" + producto.imagen }}
              style={{
                width: 100,
                height: 100,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            />

            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={styles.text}>{producto.nombreproducto}</Text>
              <Text style={styles.textrecpas}>{producto.descripcion}</Text>
            </View>

            <View
              style={{
                alignContent: "center",
                justifyContent: "space-around",
                alignItems: "center",
                height: 100,
                width: 40,
                backgroundColor: `#e50e0e`,
                flex: 0,
                padding: 4,
              }}
            >
               
          <TouchableOpacity
            onPress={(e)=>deleteproductos(producto.id,e)}
          >
              <Icon name="delete"  size={25} {...props} />
          </TouchableOpacity>
              
            
            </View>
            
            <View
              style={{
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                width: 70,
                backgroundColor: `#f25c5e`,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                flex: 0,
              }}
            >
              
              
              <Text style={styles.textsignup1}>{"$" + producto.precio}</Text>
            </View>
          </View>
        );
      })}
      </ScrollView>
    </Fragment>
  );
}

export default Productos;

const styles = StyleSheet.create({
  containerroot: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  containerchild: {
    flex: 0,
    width: "100%",

    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: "center",
  },
  cardproducto: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto",
    height: "auto",
    marginTop: 10,
    marginLeft: 5, 
    marginRight: 5, 
    fontSize: 40,
    backgroundColor: `#ffa500`,
    borderRadius: 20,
    shadowColor: "rgba(255,255,255,0)",
    shadowOffset: 1,
  },
  btn: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    marginTop: 10,

    fontSize: 40,
    backgroundColor: `#ffa500`,
    borderRadius: 50,
  },

  text: {
    marginLeft: 5,
    marginTop: 5,

    color: "white",
    fontWeight: "bold",
    fontSize: 20,
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
    marginVertical: 5,
  },
  textrecpas: {
    marginLeft: 20,
    fontSize: 12,
    color: "black",
  },
  textsignup1: {
    // margin:,
    //marginVertical:10,
    //paddingVertical:10,
    fontSize: 18,
    // paddingLeft:10,
    fontWeight: "500",
    color: "grey",
    position: "relative",
  },
  textsignup2: {
    fontSize: 13,
    fontWeight: "500",
    color: "grey",
    flex: 0,
    marginTop: 1,
    textDecorationLine: "underline",
  },
});
