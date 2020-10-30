import React from "react";

import firebase from "firebase/app";
import "firebase/auth";



 var firebaseConfig = {
    apiKey: "AIzaSyCk53C9GH0UU3z2Wnur8uEKVdiKaGPm7go",
    authDomain: "mindmetrics.firebaseapp.com",
    databaseURL: "https://mindmetrics.firebaseio.com",
    projectId: "mindmetrics",
    storageBucket: "mindmetrics.appspot.com",
    messagingSenderId: "211889867912",
    appId: "1:211889867912:web:6d50104a8145a7f32fa33d",
    measurementId: "G-Q4HCH2M962"
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

const numberCircle ={
    'borderRadius': '50%',
    width: 36,
    height: 36,
    padding: 8,
    background: '#fff',
    color: '#666',
    'textAlign': 'center',
};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
        message:'message',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  loginFunc = () =>{
    firebase.auth()
    .createUserWithEmailAndPassword("email@email.com", "password")
    .then(() => this.setState({message:'Sign In Successful'}))
    .catch((error) =>{
    console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorMessage === "The email address is already in use by another account.")
      {this.setState({message: "Nitcheu"});
         firebase.auth()
        .signInWithEmailAndPassword("email@email.com", "password")
        .then(() => this.setState({message:'Sign In Successful because account has been created alreay'}))
        .catch( error => this.setState({message: error.message}))
      }
      else this.setState({message: errorMessage});
    });
  };

  render() {
    return (
        <>
        <label> {
           this.state.message
        }</label>
        <button onClick={this.loginFunc}>
        Cliquer
        </button>
      <form  style={numberCircle} onSubmit={this.loginFunc}>
        <label>
          email
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          password
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Log In" />
      </form>
      </>
    );
  }
}
