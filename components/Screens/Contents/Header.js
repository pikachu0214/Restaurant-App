import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
      {/*Restaurant Logo */}
        <Icon
          raised
          name="spoon"
          type="font-awesome"
          color="orange"
        />
        {/*Restaurant Name */}
        <Text style={styles.logo}>DY Restaurant</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc"
  },
  fork: {
    width: 40,
    height: 40
  },
  logo: {
    fontSize: 20,
    marginLeft: 10,
    fontStyle: "italic",
    color: "black"
  }
});
