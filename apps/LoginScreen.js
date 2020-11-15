import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

import * as Google from "expo-google-app-auth";
const ANDROID_CLIENT_ID = "i have deleted client id";
const config = {
    androidClientId: ANDROID_CLIENT_ID,
    androidStandaloneAppClientId: ANDROID_CLIENT_ID,
    scopes: ["profile", "email"]
  }
export default class LoginScreen extends Component {
  
  signInWithGoogle = async () => {
    try {
      const {type,accessToken,user} = await Google.logInAsync(config);
      if (type === "success") {
        console.log("LoginScreen.js.js 21 | ", result.user.givenName);
        this.props.navigation.navigate("Profile", {
          username: user.givenName,
          accessToken
        }); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen.js.js 30 | Error with login', e);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login with Google" onPress={this.signInWithGoogle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});