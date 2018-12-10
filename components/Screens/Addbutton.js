import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
const styles = require("./Style");
export default class Addbutton extends Component {
  render() {
    return (
      <View style={styles.action}>
       <TouchableHighlight 
       underlayColor="#24ce84"
       onPress={this.props.onPress}
       >
       <Text style={styles.actionText}>{this.props.title}</Text>
       </TouchableHighlight>
      </View>
    );
  }
}
