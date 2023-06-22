import React, { Fragment, useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { Appbar } from "react-native-paper";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function DetalleProducto({ navigation, route }) {
  const { producto } = route.params;
  const [cantidad, setCantidad] = useState(1);
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("IntroNav");
          }}
        />
        <Appbar.Content title={"Producto " + producto.nombreproducto} />
        <Appbar.Action
          icon="plus"
          size={25}
          onPress={() => {
            navigation.navigate("AgregarProductos");
          }}
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.cardproducto} key={producto.id}>
          <View style={styles.cardproductoimage}>
            <Image
              source={{ uri: "http://192.168.0.10:4000/" + producto.imagen }}
              style={{
                marginTop: 20,
                width: 200,
                height: 200,
                borderRadius: 20,
              }}
            />
            <Text style={styles.titulo1}>{producto.nombreproducto}</Text>
          </View>
          <View style={styles.cardproductotext}>
            <Text style={styles.titulo2}>{producto.descripcion}</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          width: "auto",
          backgroundColor: `#f25c5e`,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            width: "auto",
            backgroundColor: `#ffa500`,
            borderRadius: 50,
          }}
        >
            { cantidad<=1?    <TouchableOpacity
            disabled={true}
            style={styles.btn}
            onPress={() => {
              setCantidad(cantidad - 1);
            }}
          >
            <Icon
              name="minus-circle-outline"
              size={20}
              color="black"
              style={{ height: "auto" }}
            />
          </TouchableOpacity>:  <TouchableOpacity
            disabled={false}
            style={styles.btn}
            onPress={() => {
              setCantidad(cantidad - 1);
            }}
          >
            <Icon
              name="minus-circle-outline"
              size={20}
              color="black"
              style={{ height: "auto" }}
            />
          </TouchableOpacity>}
       
          <Text style={styles.textsignup1}>{cantidad}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setCantidad(cantidad + 1);
            }}
          >
            <Icon
              name="plus-circle-outline"
              size={20}
              color="black"
              style={{ height: "auto" }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textsignup1}>
              {"Agregar al carrito $" + producto.precio*cantidad}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
}
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
  cardproductoimage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    marginLeft: 5,
    marginRight: 5,

    backgroundColor: `#fff`,

    shadowColor: "rgba(255,255,255,0)",
    shadowOffset: 0,
  },
  cardproductotext: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    width: "auto",
    height: "auto",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 40,
    backgroundColor: `#fff`,
    borderRadius: 20,
    shadowColor: "rgba(255,255,255,0)",
    shadowOffset: 0,
  },
  cardproducto: {
    flex: 1,
    flexDirection: "column",
    width: "auto",
    height: "auto",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 40,
    backgroundColor: `#fff`,
    borderRadius: 20,
    shadowColor: "rgba(255,255,255,0)",
    shadowOffset: 0,
  },
  btn: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
    height: 50,
    paddingHorizontal: 20,

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
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  titulo2: {
    padding: 20,
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
    fontSize: 12,
    fontWeight: "500",
    color: "grey",
    flex: 0,
    marginTop: 1,
    textDecorationLine: "underline",
  },
});
