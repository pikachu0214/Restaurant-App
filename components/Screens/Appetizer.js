import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Contents/Header";
import * as firebase from "firebase";
export default class Appetizer extends Component {
  state = { data: [] };
  static navigationOptions = { title: "Appetizer" };

  componentWillMount() {
    
  }

  listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <View>
          <FlatList
            style={{ marginLeft: "5%" }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.listcontainer}>
                <Text style={{ fontSize: 18, color: "blue" }}>
                  {item.field}, {item.value}{" "}
                </Text>
              </View>
            )}
            data={this.state.data}
            ItemSeparatorComponent={this.listSeparator}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
