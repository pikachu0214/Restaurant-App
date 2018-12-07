import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import BodyContent from "./BodyContent";
import AppetizerContent from "./AppetizerContent";

export default class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.column1}>
          {/* Appetizer */}
          <BodyContent
            imgSrc={require("../img/Appetizer/CrabRangoon.jpeg")}
            text="Appetizer"
            rating={5}
          />
        </View>
        <View style={styles.contentBanner}>
          {/* Main Course */}
          <BodyContent
            imgSrc={require("../img/Dishes/FriedPrawn.jpg")}
            text="Dish"
            rating={4}
          />
        </View>
        <View style={styles.column1}>
          {/* Drinks */}
          <BodyContent
            imgSrc={require("../img/Drinks/Drinks.jpeg")}
            text="Drinks"
            rating={3}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  column2: {
    flex: 2,
    padding: 5
  },
  contentBanner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
