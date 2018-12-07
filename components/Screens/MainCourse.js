import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Contents/Header";

export default class MainCourse extends Component {
  static navigationOptions = { title: "Dish" };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <View>
          <Text>Appetizer Screen</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
