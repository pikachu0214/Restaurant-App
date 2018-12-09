import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ListView,
  TouchableHighlight
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Contents/Header";
import { firebasedb } from "./Firebase";
import Toolbar from "./Toolbar";

const styles = require("./Style");
export default class Appetizer extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = this.getRef().child("maincourses");
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { itemDataSource: ds };
  }
  static navigationOptions = { title: "Home" };
  componentDidMount() {
    this.getItems(this.itemsRef);
  }
  getRef = () => {
    return firebasedb.ref();
  };
  getItems = itemsRef => {
    //let items = [{Name: "Sandwice", Price: "4"}, {Name: "Eggroll", Price: "4"}];
    itemsRef.on("value", snap => {
      let items = [];
      snap.forEach(child => {
        items.push({
          _key: child.key,
          name: child.val().name,
          price: child.val().price
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });
  };
  pressRow = item => {
    console.log(item);
  };
  renderRow = item => {
    return (
      <TouchableHighlight
        onPress={() => {
          this.pressRow(item);
        }}
      >
        <View style={styles.li}>
          <Text styles={styles.liText}>
            {item.name} {item.price}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="Main Course" />
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
