/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY6wMoUbEgb12Vwlp0ieJDTF-LvE3k2D8",
  authDomain: "fbase-react.firebaseapp.com",
  databaseURL: "https://fbase-react.firebaseio.com",
  projectId: "fbase-react",
  storageBucket: "fbase-react.appspot.com",
  messagingSenderId: "32639675538",
  appId: "1:32639675538:web:c640c5381e4fb8b64a8a4b"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

async function googleSignIn() {
  try {
    await signInWithGoogle();
    await console.log(auth().currentUser, "current user");
  } catch (error) {
    this.setState({ error: error.message });
  }
}

class App extends React.Component {
  render() {
    // const activeStyle = { color: "blue" };
    return (
      <div>
        <button onClick={googleSignIn}>Google</button>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
