import * as firebase from 'firebase'
import { YellowBox } from "react-native";
import _ from "lodash";


//Firebase Key:
const config = {
    apiKey: "AIzaSyBwWm-UvF-NjqrGc4hahB-cXp_CdB-tC2I",
    authDomain: "restaurant-app-42260.firebaseapp.com",
    databaseURL: "https://restaurant-app-42260.firebaseio.com",
    projectId: "restaurant-app-42260",
    storageBucket: "restaurant-app-42260.appspot.com",
    messagingSenderId: "513052896710"
  };
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth;
export const firebasedb = firebase.database();

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
