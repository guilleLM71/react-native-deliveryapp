import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStateValue } from "../../context/StateProvider";
import { Icon } from "@react-native-material/core";
import { Badge } from "@react-native-material/core";
import IconExpo from "@expo/vector-icons/MaterialIcons";
import axios from "axios";




function ClientePag({navigation,props}) {
  const [{ user, token }, dispatch] = useStateValue();
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getcategorias();
    gettodosproductos();
  }, []);
  async function getcategorias() {
    const options = {
      method: "GET",
      url: "http://192.168.0.10:4000/api/getcategorias",
      headers: { "Content-Type": "application/json", "xx-token": token },
    };
    await axios(options)
      .then((response) => {
        console.log("response :>> ", response.data.categorias);
        setCategorias(response.data.categorias);
        //console.log('categorias :>> ', categorias);
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

  async function gettodosproductos() {
    const options = {
      method: "GET",
      url: "http://192.168.0.10:4000/api/listproductosadmin",
      headers: { "Content-Type": "application/json", "xx-token": token },
    };
    await axios(options)
      .then((response) => {
        console.log("responseprod :>> ", response.data.productsdb);
        setProductos(response.data.productsdb);
        //console.log("productos :>> ", productos);
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

  async function getproductosxcategoria(idCategoria) {
    const options = {
      method: "GET",
      url:
        "http://192.168.0.10:4000/api/buscaproductosxcategoria/" + idCategoria,
      headers: { "Content-Type": "application/json", "xx-token": token },
    };
    await axios(options)
      .then((response) => {
        console.log("responseprod :>> ", response.data);
        setProductos(response.data.productsdb);
        //console.log("productos :>> ", productos);
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

  const handleProductoPress = producto => {
    // Navegar a la pantalla de detalles del producto
    navigation.navigate('DetalleProducto', { producto });
  };
  return (
    <View style={styles.containerroot}>
      <View style={styles.containerchild}>
        <Text style={styles.titulo1}>
          Bienvenido: {user.nombre + " " + user.apellido}
        </Text>
        <View style={styles.containerbadge}>
          <Badge
            label={1}
            labelStyle={{
              fontSize: 15,
            }}
            style={{ position: "absolute", zIndex: 1, alignSelf: "flex-end" }}
          ></Badge>
          <Icon
            name="shopping-outline"
            size={30}
            color="black"
            style={{ height: "auto" }}
          />
        </View>
      </View>

      <View style={styles.containerchild2}>
        <Text style={styles.titulo1}>Que desea ordenar hoy?</Text>
      </View>
      <View style={styles.containerdir}>
        <IconExpo
          name="place"
          size={30}
          color="black"
          style={{ height: "auto" }}
        />

        <Text style={styles.titulo1}>Direccion</Text>
      </View>

      <View style={styles.containercat}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {categorias.map((categoria) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log("object :>> ", categoria.id);
                  getproductosxcategoria(categoria.id);
                }}
                style={styles.btn}
                key={categoria.id}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <Text style={styles.text}>{categoria.categoria}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.containerchild}>
        <Text style={styles.textsignup1}>Productos Populares</Text>
        <TouchableOpacity
          onPress={() => {
            gettodosproductos();
          }}
        >
          <Text style={styles.textsignup2}>Ver todo</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.containerprod}>
          <FlatList
            data={productos}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log("object :>> ", item.id);
                    handleProductoPress(item);
                  }}
                >
                  <View style={styles.cardproducto} key={item.id}>
                    <Image
                      source={{
                        uri: "http://192.168.0.10:4000/" + item.imagen,
                      }}
                      style={{
                        width: 150,
                        height: 100,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}
                    />

                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <Text style={styles.text}>{item.nombreproducto}</Text>
                    </View>

                    <View
                      style={{
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 30,
                        width: 150,
                        backgroundColor: `#f25c5e`,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        flex: 0,
                      }}
                    >
                      <Text style={styles.textsignup1}>
                        {"$" + item.precio}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </ScrollView>
     
     
    
    </View>
  );
}

export default ClientePag;
const styles = StyleSheet.create({
  containerroot: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerbadge: {
    position: "relative",
    backgroundColor: "#fff",
  },
  containerchild: {
    paddingTop: 10,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerchild2: {
    marginLeft: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerdir: {
    marginLeft: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  containercat: {
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  containerprod: {
    height: "auto",
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  cardproducto: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 150,
    height: "auto",
    marginTop: 10,
    marginLeft: 17,
    marginRight: 5,

    fontSize: 40,
    backgroundColor: `#ffa500`,
    borderRadius: 20,
    shadowColor: "rgba(255,255,255,0)",
  },

  btn: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 40,
    padding: 10,
    marginTop: 20,
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
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
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
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    flex: 0,
    alignSelf: "flex-end",
    marginTop: 1,
    textDecorationLine: "underline",
  },
  textsignup1: {
    fontSize: 13,
    fontWeight: "500",
    color: "grey",
    flex: 0,

    marginTop: 1,
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
