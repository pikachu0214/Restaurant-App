import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { Rating } from "react-native-elements";
import Appetizer from "./Appetizer";
export default class AppetizerContent extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={this.props.imgSrc} style={styles.Image}>
        <Button
          style={styles.text}
          title={this.props.text}
          onPress={() => navigate("Appetizer")}
        />
        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={this.props.rating}
          imageSize={15}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
          readonly
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  rating: {
    fontSize: 1
  },
  text: {
    marginTop: 50,
    borderColor: "white",
    borderRadius: 4,
    color: "white",
    borderWidth: 1,
    fontSize: 28,
    fontStyle: "italic"
  }
});
