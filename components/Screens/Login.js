import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Home from "./Home";
import LoginBanner from "./LoginBanner";
import { ScrollView } from "react-native-gesture-handler";

export default class Login extends React.Component {  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <LoginBanner />
        <Button onPress={() => navigate("Home")} title="Signin" />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
