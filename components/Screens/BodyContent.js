import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { Rating } from "react-native-elements";

export default class BodyContent extends Component {
  render() {
    return (
      <ImageBackground source={this.props.imgSrc} style={styles.Image}>
        <Text
          style={styles.text}>{this.props.text}
        </Text>
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
