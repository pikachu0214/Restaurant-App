import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./Contents/Header";
import Banner from "./Banner";
import BodyContent from "./BodyContent";

import { ScrollView } from "react-native-gesture-handler";

export default class Home extends Component {
  static navigationOptions = { title: "Logout" };

  render() {
    const { navigate } = this.props.navigation;
    return <ScrollView style={styles.container}>
        <Header />
        <Banner />

        {/*Body Content*/}
        <View style={styles.body}>
          <View style={styles.column1}>
            {/* Appetizer */}
            <BodyContent imgSrc={require("../img/Appetizer/CrabRangoon.jpeg")} text="Appetizer" rating={5} />
            <Button onPress={() => navigate("Appetizer")} title="Go to Appetizer" />
          </View>
          <View style={styles.contentBanner}>
            {/* Main Course */}
            <BodyContent imgSrc={require("../img/Dishes/FriedPrawn.jpg")} text="Main Course" rating={4} />
            <Button onPress={() => navigate("Dish")} title="Go to Main Course" />
          </View>
          <View style={styles.column1}>
            {/* Drinks */}
            <BodyContent imgSrc={require("../img/Drinks/Drinks.jpeg")} text="Drinks" rating={3} />
            <Button onPress={() => navigate("Drinks")} title="Go to Drinks" />
          </View>
        </View>
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {},
  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },
  column1: {
    flex: 1,
    padding: 5
  },
  contentBanner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
