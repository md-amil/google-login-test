import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Google from "expo-google-app-auth";
const ANDROID_CLIENT_ID =  "i have deleted client id ";
export default class ProfileScreen extends Component {
  
    componentDidMount(){
      this.setState({accessToken})
    }
  
    logout =() =>{
      
        await Google.logOutAsync({
          accessToken:this.state.accessToken, 
          androidClientId:ANDROID_CLIENT_ID,
          androidStandaloneAppClientId:ANDROID_CLIENT_ID
        })
       this.props.navigation.navigate("Login")

    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome, {this.props.navigation.getParam("username")}
        </Text>
        <Button
          title="Sign out"
          onPress={() => }
        />
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
