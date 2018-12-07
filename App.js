import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Login from "./components/Screens/Login";
import Home from "./components/Screens/Home";
import Appetizer from "./components/Screens/Appetizer";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainCourse from "./components/Screens/MainCourse";
import Drinks from "./components/Screens/Drinks";
import Body from "./components/Screens/Body";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNav />
      </View>
    );
  }
}
const MyApp = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Appetizer: { screen: Appetizer },
  Dish: { screen: MainCourse },
  Drinks: { screen: Drinks },
  Body: { screen: Body }

});
const AppNav = createAppContainer(MyApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 8,
  }
});
