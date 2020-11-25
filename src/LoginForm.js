import React from "react";
import firebaseService from './firebaseService';

/*import firebase from "firebase/app";
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
  firebase.initializeApp(firebaseConfig);*/


const numberCircle ={
    'borderRadius': '50%',
    width: 36,
    height: 36,
    padding: 8,
    background: '#fff',
    color: '#666',
    'textAlign': 'center',
    flexDirection: 'column,'
};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        email:'',
        password:'',
        message:'message',
        perc:'null',
    };

    this.handleChange = this.handleChange.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  setPassword(event) {
    this.setState({password: event.target.value});
  }
  setEmail (event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    firebaseService.auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.setState({message:'User Account created successfully'}))
    .catch((error) =>{
    console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorMessage === "The email address is already in use by another account.")
      {this.setState({message: "Email has already been created"});
      firebaseService.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.setState({message:'Sign In Successful because account has been created alreay'}))
        .catch( error => this.setState({message: error.message}))
      }
      else this.setState({message: errorMessage});
    });
    event.preventDefault();
  }

  loginFunc = () =>{
    var database = firebaseService.database();

    database.ref('users/').set({
      username: "name",
      email: "email",
      profile_picture : "imageUrl"
    });
   /* firebaseService.auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.setState({message:'User Account created successfully'}))
    .catch((error) =>{
    console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorMessage === "The email address is already in use by another account.")
      {this.setState({message: "Email has already been created"});
      firebaseService.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.setState({message:'Sign In Successful because account has been created alreay'}))
        .catch( error => this.setState({message: error.message}))
      }
      else this.setState({message: errorMessage});
    });*/
  };
  
   percentile = (p)=> {
    let data = [1.9 , 1.7 , 2 , 2.3 , 1.8 , 2 , 2.4 , 2.1 , 2.4 , 0.9 , 1.2 , 1 , 1.7 , 1.3 , 1.3 ];
    data = data.sort((a, b) =>{
      return a - b;
    });
    let n = data.length;
    let valeur =  Math.ceil(p*n/100);

    let donne = [11, 10, 12, 23, 17, 16, 17, 14, 24, 22, 14];
    donne = donne.sort((a, b) =>{
      return a - b;
    });
    let findees =   donne.lastIndexOf(23);
    console.log("index of ",findees);
    let percc = Math.floor(findees +1) *100/donne.length;
    //valeur = 10* 100/n = p
    console.log("ICICCICICI percc",percc);
    
    this.setState({perc:data[valeur-1]})
   // return ;
 }  

  render() {
    return (
        <div>
      <button onClick={()=>this.percentile(60)}>
        percentile
        </button>
    <label> asdsd {this.state.perc}</label>
        <label> {
           this.state.message
        }</label>
        <button onClick={this.loginFunc}>
        Cliquer
        </button>
      <form  style={numberCircle} onSubmit={this.handleSubmit}>
        <label>
          email
          <input type="email" value={this.state.email} onChange={this.setEmail} />
        </label>
        <label>
          password
          <input type="password" value={this.state.password} onChange={this.setPassword} />
        </label>
        <input type="submit" value="Log In" />
      </form>
      </div>
    );
  }
}
