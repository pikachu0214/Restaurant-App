import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Contents/Header";
import Banner from "./Banner";
import Body from "./Body";
import Login from "./Login";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends Component {
  static navigationOptions = { title: "Logout", };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Banner />
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
