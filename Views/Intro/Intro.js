import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import logo from '../../assets/food-delivery-marker.png'
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true
  }),
});

function Intro({navigation}) {

    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        // Get a token
        //notifi()
        
      },[])
      async function sendPushNotification(expoPushToken) {
        const message = {
          to: expoPushToken,
          sound: 'default',
          title: 'Original Title',
          body: 'And here is the body!',
          data: { someData: 'goes here' },
        };
      
        await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
        });
      }
    async function notifi(){
      registerForPushNotificationsAsync()
      .then((res)=>{console.log('res :>> ', res);});

      // This listener is fired whenever a notification is received while the app is foregrounded
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          console.log('--- notification received ---');
          console.log(notification);
          console.log('------');
      });

      // This listener is fired whenever a user taps on or interacts with a notification
      // (works when app is foregrounded, backgrounded, or killed)
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log('--- notification tapped ---');
          console.log(response);
          console.log('------');
      });

      // Unsubscribe from events
      return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
      };
    }  


  async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    sendPushNotification(token)
    console.log( token);

    return token;
}


    return (
       <View style={styles.containerroot}>

            <Text style={styles.titulo1}>
                DeliAPP
            </Text>

            <View style={styles.containerchild}>
             <Image source={logo}
             ></Image>       

            <TouchableOpacity style={styles.btn}
                onPress={()=>{
                    navigation.navigate('Login', {name: 'Jane'})
                }}
                >
                 <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            </View>
       </View>
    );
}

export default Intro;

const styles = StyleSheet.create({  

  containerroot: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
 
  },
  containerchild: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex:0,
    alignItems: "center",
    justifyContent: "center",
    width:160,
    height:50,
    padding: 10,
    margin: 10,
    fontSize: 40,
    backgroundColor:`#ffa500`,
    borderRadius:50
  },

  text: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    color:"white",
    fontWeight:"bold",
    fontSize: 20,
  },

  titulo1: {
    marginTop:80,
    color:"black",
    fontWeight:"bold",
    fontSize: 30,
  },

})
