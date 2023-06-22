import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { Appbar } from "react-native-paper";
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TextInput } from "@react-native-material/core";
import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import DocumentPicker from "react-native-document-picker";
import { SelectList } from "react-native-dropdown-select-list";
const createFormData = (
  photo
  //, body = {}
) => {
  let uriParts = photo.split(".");
  console.log("uriParts :>> ", uriParts);
  let fileType = uriParts[uriParts.length - 1];
  console.log("fileType :>> ", fileType);

  const data = new FormData();
  console.log("photo :>> ", photo);
  data.append("photo", {
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
    uri: photo,
  });
  /*
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });*/
  console.log("data :>> ", data);
  return data;
};

function AgregarProductos({ navigation, props, route }) {
  const [{ user, token }] = useStateValue();
  const [photo, setPhoto] = useState("");
  const [datos, setDatos] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
  });
  useEffect(()=>{
    getcategorias()
},[categorias])
  const showToastWithGravityAndOffset = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  const [selected, setSelected] = React.useState("");
 const [categorias,setCategorias]=useState([])
   
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
            //setCategorias(response.data.categorias)
            

            let newArray = response.data.categorias.map((item) => {
              return {key: item.id, value: item.categoria}
            })
            //Set Data Variable
            setCategorias(newArray)
            console.log('categorias :>> ', categorias);
            //showToastWithGravityAndOffset()
            //setDatauser({...res})
            //console.log('response :>> ', request.data);
            //console.log('user :>> ', datauser);
          })
          .catch((error) => {
            // Handle any errors that occur
            console.error(error);
/*
            const nuevosdatos = { ...datos }    
                    nuevosdatos.categoria = val        
                    setDatos(nuevosdatos)}*/
        });
          
    }
  const handleChoosePhoto = async () => {
    const hasPermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log("imagen ", image);
    setPhoto(image.assets[0]);
    console.log("photo :>> ", photo);
  };

  const handleUploadPhoto = async () => {
    let uriParts = photo.uri.split(".");
    console.log("uriParts :>> ", uriParts);
    let fileType = uriParts[uriParts.length - 1];
    console.log("fileType :>> ", fileType);

    const form = new FormData();
    // console.log('p :>> ',  JSON.stringify(photo));
    form.append("file", {
      uri: photo.uri,
      type: photo.type + "/" + fileType,
      name: photo.uri,
     
    }
    
    );
    let cuerpo={ 
      nombre:datos.nombre,
      descripcion:datos.descripcion,
      precio:datos.precio,
      categoria:selected} 
    form.append("datos", JSON.stringify(cuerpo) )

    console.log("data :>> ", form);

    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        "xx-token": token,
      },
      
    };
    //console.log('options :>> ', options);
    await axios
      .post(`http://192.168.0.10:4000/api/addproductos`, form, options)
      .then((res) => {
        //console.log('res :>> ', res);
      });
    //const response = await request
    //console.log('response :>> ', response);
    showWithGravityAndOffset("Producto registrado")
    
  };

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("Productos");
          }}
        />
        <Appbar.Content title="Agregar Productos" />
        <Appbar.Action
          icon="content-save-edit"
          size={25}
          onPress={() => {
            handleUploadPhoto(); navigation.navigate("Productos");
          }}
        />
      </Appbar.Header>

      <ScrollView>
      <View style={styles.containerform}>
        <Text style={styles.titulo2}>Nombre</Text>
        <TextInput
          style={styles.inputsform}
          onChangeText={(val) => {
            setDatos({ ...datos, ["nombre"]: val });
          }}
        />
        <Text style={styles.titulo2}>Descripcion</Text>
        <TextInput
          style={styles.inputsform}
          onChangeText={(val) => {
            setDatos({ ...datos, ["descripcion"]: val });
          }}

        />

        <Text style={styles.titulo2}>Precio</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.inputsform}
          onChangeText={(val) => {
            setDatos({ ...datos, ["precio"]: val });
          }}
          
        />

          <Text style={styles.titulo2}>Categoria</Text>
          <SelectList  search={false}
                setSelected={(val) => {setSelected(val); console.log(val)}} 
                  data={categorias} 
                  save="key"
              />

        <View
          style={{ flex: 0, alignItems: "center", justifyContent: "center" }}
        >
         {
          photo && (<Image

            source={{ uri: photo.uri }}
            style={{ width: 200, height: 200 , gap:25 }}
            />)
         }  

          <TouchableOpacity
            style={styles.btn}
            title="Choose Photo"
            onPress={handleChoosePhoto}
          >
            <Text style={styles.text}>Subir Imagen</Text>
          </TouchableOpacity>
         

          {/*photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )*/}
        </View>
      </View>
      </ScrollView>
    </Fragment>
  );
}

export default AgregarProductos;

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
  btn: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "70%",
    height: 50,
    paddingHorizontal: 20,
    marginTop: 10,

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
    marginTop: 10,
    paddingTop: 10,
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: "500",
    color: "grey",
    flex: 0,
    alignSelf: "flex-start",
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
