
import ReactDOM from "react-dom";
import React, { Component } from "react";
import logo from "./img/logo.png";
import Description from './Description';
import LoginForm from './LoginForm';
import Canvas from './Canvas';
import ErrorBoundary from './ErrorBoundary';
import firebaseService from './firebaseService';
import Resultat from './Resultat';
import Footer from './Footer';
import Gauge from './Gauge';
import Menu from './Menu';

import menuImage from './img/menu-close.svg';

import firebase from "firebase/app";
import TextKey from './text/TextKey';
import Home from './Home';

import MediaQuery from './MediaQuery';

import {
  useLocation,
} from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Blog';

import MindButton from './components/MindButton';

const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}
const heightScreen = (taille) =>  {
  return taille * 100/2610 + 'vw';
} 
const  fontSize = widthScreen(19);
const padding = widthScreen(12);

const styleMenu = { 
  textDecoration: 'none',
  paddingRight:'2%',
  display:'flex',
  fontSize:fontSize,
  fontFamily: 'Open Sans Light'
};
const divStyle = {
 // flex:1,
  backgroundColor: '#d3d3d3', //'#FFFAFA',
  //'fontWeight': 'bold',
   display: 'flex',
  'flexDirection':'row',
  justifyContent:'space-around',
  alignItems:'center', 
  maxWidth:'100%',
  paddingLeft: widthScreen(360),
  paddingRight: widthScreen(360),

  paddingTop: heightScreen(18),
  paddingBottom:heightScreen(14),
  //'paddingLeft':36000*widthScreen +'vw',
};

const numberCircle ={
  display:'flex',
    'borderRadius': '50%',
    width: 36,
    height: 36,
    padding: 8,
    background: 'red', ///#fff
    color: '#666',
  //  'textAlign': 'center',
   // alignSelf:'center'
};
const imgStyle = {
  padding:'20'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: "",
      location:'',
    };
  }

  componentDidMount() {
    this.authSubscription = firebaseService.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
 }

  componentWillUnmount() {
    this.authSubscription();
  }



  setLocation = loc => {
      this.setState({location:loc});
  }


   logOut = () => {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
  }

  render() {

    const tesFunc = () => this.setState({openMenu:!this.state.openMenu});
return (
  <ErrorBoundary>
    <Router>
      <div >
        <div class="header" style={{backgroundColor:'white'}}>
          <div class="row" style= {{display:'flex',alignItems:'center',justifyContent:'center'}}>
            {this.state.openMenu?    
              <div class="col-3 col-5 col-s-3 menu" onClick={() =>this.setState({openMenu:!this.state.openMenu})}>
                <Menu/>
              </div>:null}
            {!this.state.openMenu? 
            <img  id="my-content"  class="col-5" onClick={() => this.setState({openMenu:!this.state.openMenu})} src ={menuImage}  style={{backgroundColor:'white'}}/>
            : null}

            <div class="col-2"> 
              <Link to="/" style={{ textDecoration: 'none' }}>
              <button style={{backgroundColor:'transparent',borderColor:'transparent'}} onClick={() => this.logOut()}>
                <img  src= {logo} alt="Logo"/>
              </button>
              </Link>
            </div>
            {this.state.location !== "description" ?    
              <div  id="Menusup" class="col-3 col-5 col-s-3 menu" >
                <Menu/>
              </div>:null}
              
            
            {this.state.location !== "description" ? <div  style={{display:'flex',justifyContent:'flex-end'}}>
              <Link to="/description" style={{textDecoration: 'none',}} transition="glide-right">
                <MindButton   func={tesFunc} textSize={20.5} text={"TAKE TEST"} />
              </Link>
            </div> : null}
          </div>
        </div>

      </div>
      <Switch>
      <Route path="/research">
      <Research />
      </Route>
      <Route path="/contact">
      <Contact />
      </Route>
      <Route path="/canvas">
      <Canvas />
      </Route>
      <Route path="/MediaQuery">
      <MediaQuery />
      </Route>
      <Route path="/login">
      <LoginForm />
      </Route>
      <Route path="/description">
      <Description func= {this.setLocation}/>
      </Route>
      <Route path="/blog">
      <Blog />
      </Route>
      <Route path="/">
      <Home func= {this.setLocation}/>
      </Route>
      <Route path="/footer">
      <Footer />
      </Route>
      </Switch>
    </Router>
  </ErrorBoundary>
);
  }
}

//export default App


function Research() {
  return <h2>Reesearch </h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
