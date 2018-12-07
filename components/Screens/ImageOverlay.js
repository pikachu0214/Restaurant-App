import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ImageOveraly extends Component {
  render() {
    return (  
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.textOverlay}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
