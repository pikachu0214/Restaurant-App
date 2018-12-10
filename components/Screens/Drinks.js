import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput
} from "react-native";
import { firebasedb } from "./Firebase";
import Toolbar from "./Toolbar";
import Addbutton from "./Addbutton";
const styles = require("./Style");
export default class Drinks extends Component {
  static navigationOptions = { title: "Home" };

  constructor(props) {
    super(props);
    this.itemsRef = this.getRef().child("drinks");
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      itemDataSource: ds,
      modalVisible: false,
      name: "",
      price: ""
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    this.getItems(this.itemsRef);
  }
  getRef = () => {
    return firebasedb.ref();
  };
  getItems = itemsRef => {
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
    firebasedb
      .ref()
      .child("drinks")
      .remove();
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
  saveData = () => {
    this.setModalVisible(true);
  };
  render() {
    return <View style={styles.container}>
        <Toolbar title="Drinks" />
        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {}}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Toolbar title="Add drink" />
              <TextInput style={{ paddingTop: 5, marginTop: 20, marginBottom: 20 }} value={this.state.name} placeholder="drink name" onChangeText={name => this.setState(
                    { name }
                  )} />
              <TextInput style={{ paddingTop: 5, marginTop: 20, marginBottom: 20 }} value={this.state.price} placeholder="price" onChangeText={price => this.setState(
                    { price }
                  )} />
              <TouchableHighlight onPress={() => {
                  this.itemsRef.push({
                    name: this.state.name,
                    price: this.state.price + "£"
                  });
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text
                  style={{
                    paddingTop: 5,
                    marginTop: 20,
                    marginBottom: 20,
                    color: "green"
                  }}
                >
                  Save Drink
                </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ paddingTop: 5, marginTop: 20, marginBottom: 20, color: "blue" }}>
                  Cancel
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <ListView dataSource={this.state.itemDataSource} renderRow={this.renderRow} />
        <Addbutton onPress={this.saveData} title="Add" />
      </View>;
  }
}
