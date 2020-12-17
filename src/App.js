
import ReactDOM from "react-dom";
import React, { Component } from "react";
import logo from "./img/logo.png";
import result from "./img/result.png";
import faces from './img/faces.png';
import scheme_small from './img/scheme_small.png';
import hand from './img/hand.png';
import ico_chart from './img/ico_chart.png';
import social_icons from './img/social_icons.png';
import logo_footer from './img/logo_footer.png';
import Description from './Description';
import LoginForm from './LoginForm';
import Canvas from './Canvas';
import ErrorBoundary from './ErrorBoundary';
import firebaseService from './firebaseService';
import Resultat from './Resultat';
import Footer from './Footer';
import Gauge from './Gauge';
import Menu from './Menu';
import firebase from "firebase/app";
import TextKey from './text/TextKey';

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

const divStyle = {
 // flex:1,
  backgroundColor: '#FFFAFA',//'#d3d3d3',
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
      text: ""
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


   logOut = () => {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
  }


  render() {
return (
  <ErrorBoundary>
    <Router>
      <div >
        <div style={divStyle}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{backgroundColor:'transparent',borderColor:'transparent'}} onClick={() => this.logOut()}>
              <img  
                style={{
                  display: 'flex',paddingTop:heightScreen(14),paddingBottom:heightScreen(14),
                }} 
              src={logo} alt="logo"
              />
            </button>
          </Link>
          {!this.state.user?
          <>
            <Menu justifyContent='flex-end'/> 
            <Link to="/description" style={{textDecoration: 'none',}} transition="glide-right">
              <MindButton paddingHorizontal='30'  textSize={fontSize} text={TextKey.button.takeTest} />
            </Link>
          </>:null}
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
      <Route path="/login">
      <LoginForm />
      </Route>
      <Route path="/description">
      <Description />
      </Route>
      <Route path="/resultat">
      <Resultat {...this.props}/>
      </Route>
      <Route path="/blog">
      <Blog />
      </Route>
      <Route path="/">
      <Home />
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

function Home() {
  return (
  <>
    <div style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column',maxWidth:'100%'}}>
      <label style={{fontSize:widthScreen(46.5),fontFamily:'Open Sans Light',paddingTop:heightScreen(64),paddingBottom:heightScreen(29)}}> Your True Personality Revealed</label>
        <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column'}}>
        <label style={{fontSize:widthScreen(22),fontFamily:'Open Sans Light'}}> We use your writing and social media profiles to build you a detailed </label>
        <label style={{fontSize:widthScreen(22),fontFamily:'Open Sans Light',paddingBottom:heightScreen(29)}} >and accurate Personality report </label>
      </label>
      <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
        <MindButton  textSize={widthScreen(22)} text={TextKey.button.freeAnalysis} marginBottom={heightScreen(53)}/>
      </Link>
      <img
        style={{
          display: 'flex',
          maxWidth: '100%', maxHeight: '100%',
        }}
        src={result} alt="result" 
      />
      <img
        style={{
          display: 'flex',maxWidth: '100%', maxHeight: 'auto',paddingBottom:heightScreen(70)
        }}
        src={faces} 
        alt="faces"
      />
      <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column','fontSize':widthScreen(40),fontFamily:'Open Sans Light',paddingBottom:heightScreen(51)}}>
        <label> What Your Words  </label>
        <label>Says About You</label>
      </label>
      <label style={{justifyContent:'center',display:'flex','flexDirection':'column',alignItems:'center',fontSize:widthScreen(22),fontFamily:'Open Sans Light'}}>
        <label> Your writing is a sample of how you think.Studying the patterns we've found in the way certain people of </label>
        <label>certain personalities use words, we can use your writing to determine using data,what kind of Personality</label>
        <label>you have exactly.</label>
        <label style={{color:'#ba097d','marginTop':heightScreen(10),alignSelf:'center',paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>find ou more &gt; </label>
      </label>
      <nav style={{display:'flex','flexDirection':'row',justifyContent:'center'}}>
        <label style={{display: 'flex','flexDirection':'column'}}>
          <label style={{fontSize:widthScreen(40), fontFamily:'Open Sans Light'}}> Data Driven and Scientific  </label>
          <label style={{fontSize:widthScreen(22), fontFamily:'Open Sans Light',width:widthScreen(298.47)}}>Using data and natural language processing we're able to predict your Personality based on the most popular Personality model used in the psychology community, the Five Factor Personality model</label>
          <label style={{color:'#ba097d','marginTop':heightScreen(10),paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>find ou more &gt; </label>
        </label>
        <img
          style={{display: 'flex',maxWidth: '50%', maxHeight: 'auto',padding:'5%'}}
          src={scheme_small} alt="scheme" 
        />
      </nav>
      <nav style={{display:'flex','flexDirection':'row',backgroundColor:'#d3d3d3',paddingLeft:widthScreen(50),paddingRight:widthScreen(50),paddingTop:heightScreen(50),paddingBottom:heightScreen(50)}}>
        <img
          style={{display: 'flex',maxWidth: widthScreen(1503), maxHeight: 'auto',alignSelf:'flex-end',paddingLeft:widthScreen(50)}}
          src={hand} alt="hand"
        />
        <label style={{display: 'flex','justifyContent':'center','flexDirection':'column',width:widthScreen(300)}}>
          <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(40),paddingBottom:heightScreen(30),marginBottom:heightScreen(33)}}> Easy to Use  </label>
          <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(22)}}> Faster than any other personality analysis out there. Just choose where and what you want us to analyze: your twitter , Facebook or Copy and paste  you blog, We'll have it analyzed in seconds.</label>
          <label style={{color:'#ba097d','marginTop':heightScreen(10),alignSelf:'center',paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>Try it out &gt; </label>
        </label>
      </nav>
      <nav style={{display:'flex','flexDirection':'row',paddingLeft:widthScreen(380),paddingRight:widthScreen(380)}}>
        <label style={{display: 'flex','flexDirection':'column',paddingTop:heightScreen(116)}}>
          <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(40),paddingBottom:heightScreen(30),marginBottom:heightScreen(33)}}> Detailed Personality Reports  </label>
          <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(22),width:'30%',display:'flex',alignSelf:'flex-start'}}>Free reports includes your personality profile, including 5 majors traits, values , and needs and text summary as well as graph representation of who you are </label>
          <label style={{color:'#ba097d','marginTop':heightScreen(10),paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>Try it out &gt; </label>
        </label>
        <img
          style={{display: 'flex',maxWidth: '50%', maxHeight: 'auto',alignSelf:'flex-end', transform: [{ rotate: '14deg' }],paddingBottom:heightScreen(116)}}
          src={ico_chart} alt="ico_chart"
        />
      </nav>
      <div 
        style ={{display: 'flex',
          'alignItems':'center',
          'justifyContent':'center',
          'flexDirection':'column',
          width:'100%',
          'backgroundColor':'#d3d3d3',
          paddingBottom:20,
          paddingTop:20
        }}
      >
        <label style ={{'fontSize':widthScreen(40),'fontFamily':'Open Sans Light',paddingBottom:heightScreen(22)}}>Discover who You are....</label>
        <Link to="/description" transition="glide-right">
          <MindButton  textSize={widthScreen(22)} text={TextKey.button.freeAnalysis} />
        </Link>
      </div>
    </div>
    <Footer/>
  </>
  );
}

function Research() {
  return <h2>Reesearch </h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
