import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Header from "./Contents/Header";
export default class LoginBanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*Banner Image*/}
        <ImageBackground
          source={require("../img/CuttingBoard.jpeg")}
          style={styles.banner}
          alt="cutting board"
        >
          <View style={styles.imageheader}>
            <Header />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  banner: {
    width: "100%",
    height: 515,
    alignItems: "center",
    justifyContent: "center"
  },
  imageheader: {
      marginBottom: 400,
  }
});
