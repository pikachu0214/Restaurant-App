import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground} from "react-native";
import ImageOverlay from "./ImageOverlay";

export default class Banner extends Component {
  render() {
    return (
        <View style={styles.container}>
        {/*Banner Image*/}
        <ImageBackground
        source={require("../img/PersonOrdering.jpeg")} 
        style={styles.banner}
        alt="woman looking at menu" >
        
        <ImageOverlay textOverlay="Reservation" />

        </ImageBackground> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    banner: {
        width: "100%",
        height: 400,
        alignItems: "center",
        justifyContent: "center"
    },
});
