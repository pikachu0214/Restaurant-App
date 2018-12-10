import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Alert, StatusBar } from "react-native";

const styles = require("./Style");
export default class Toolbar extends Component {
  render() {
    return (
        <View>  
            <StatusBar 
                backgroundColor="white"
                barStyle="light-content"
            />
            <View style={styles.navbar}>
                <Text style={styles.navbarTitle}>
                    {this.props.title}
                </Text>
            </View>
        </View>
    );
  }
}
