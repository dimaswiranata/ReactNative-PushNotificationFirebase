import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PushNotification from "react-native-push-notification";
// import PushNotificationIOS from "@react-native-community/push-notification-ios";

const App = () => {

  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
  
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, [])

  const sendMessage = () => {
    PushNotification.localNotification({
      title: "My Notification Title",
      message: "My Notification Message"
    });
  };

  return (
    <View>
      <Text>Test</Text>
      <Button 
        onPress={() => sendMessage()}
        title="Click here to send message"
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
