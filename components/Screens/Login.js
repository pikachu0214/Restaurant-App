import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Container, Content, Header, Form, Input, Item, Button} from "native-base"
import Home from "./Home";
import LoginBanner from "./LoginBanner";
import { ScrollView } from "react-native-gesture-handler";
import {firebaseAuth} from './Firebase';
import Appetizer from "./Appetizer";

export default class Login extends React.Component {  
  state = {email: "", password: "", data: []};
  
  //Method to sign user with email and password
  signUpUser = (email, password) => {
    try{
      if(this.state.password.length<6){
        alert("Please enter at least 6 character")
        return;
      }
        firebaseAuth().createUserWithEmailAndPassword(email, password).then(function(user){
        Alert.alert("Successfully signed up!")
        })
    }
    catch(error){
      console.log(error.toString())
    }
  };

  //Method to log user with email and password
  loginUser = (email, password) => {
    try{
      firebaseAuth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
    }
    catch(error){
      console.log(error.toString())
    }
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container}>
        <Form>
          <Item>
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            />
          </Item>
          <Item>
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}

            />
          </Item>
          {/*Login Button*/}
          <Button style={{marginTop: 10}} full rounded success
          onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
          <Text style={{color: "white"}}>Login</Text>
          </Button>
          {/*Sign Up Button*/}
          <Button style={{marginTop: 10}} full rounded primary
          onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
          <Text style={{color: "white"}}>Sign Up</Text>
          </Button>
        </Form>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    marginBottom: 300,
  },
  
});
