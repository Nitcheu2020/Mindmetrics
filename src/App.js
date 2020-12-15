
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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Blog';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      list: prevState.list.concat(this.state.text),
      text: ""
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
        <ErrorBoundary>
            <Router>
              <div style={{backgroundColor:'pink'}}>

        {!this.state.user? <div style={divStyle}>

        <img
          style={{
            display: 'flex',paddingTop:heightScreen(14),paddingBottom:heightScreen(14),
          //  backgroundColor:'red'
          }}
          src={logo} alt="Logo" 
        />
            <Menu justifyContent='flex-end'/>
            <Link to="/description" style={{textDecoration: 'none',}} transition="glide-right">
           <button style={{
              position:'relative',
              display:'flex',
              color:'white',
              'backgroundColor':'#F49608',
              'borderRadius':20,
              //padding:padding,
              padding: padding,
              borderColor:'transparent',
              fontSize:fontSize
            }}>TAKE TEST</button>
            </Link>
          </div>:null}

          </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
      <h1>Your True Personality Revealed</h1>
      <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column',padding:'5%'}}>
        <label> We use your writing and social media profiles to build you a detailed </label>
        <label  >and accurate Personality report </label>
      </label>
     
      <Link to="/description" style={{ textDecoration: 'none',}}>
      <button style={{
                'marginTop':20,
                color:'white',
                'backgroundColor':'#F49608',
                'borderRadius':20,
                padding: 10,
                borderColor:'transparent'
              }}>
                GET FREE ANALYSIS
      </button>
      </Link>
      <img
          style={{
            display: 'flex',
            maxWidth: '100%', maxHeight: '100%',padding:10
            //alignSelf:'center'
          // 'marginLeft': 50,padding:10
          }}
          src={result} alt="result" 
      />
      <img
        style={{
           display: 'flex',maxWidth: '100%', maxHeight: 'auto'
        }}
        src={faces} alt="faces"
      />
      <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column','marginTop':20,'fontSize':25}}>
        <label> What Your Words  </label>
        <label>Says About You</label>
      </label>
        
      <label style={{justifyContent:'center',display:'flex',padding:'5%','flexDirection':'column'}}>
        <label> Your writing is a sample of how you think.Studying the patterns we've found in the way certain people of </label>
        <label>certain personalities use words, we can use your writing to determine using data,what kind of Personality</label>
        <label>you have exactly.</label>
        <label style={{color:'pink','marginTop':10,alignSelf:'center'}}>find more.... </label>
      </label>
      <nav style={{display:'flex','flexDirection':'row',justifyContent:'center',alignItems:'center'}}>
        <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column','marginTop':20,maxWidth:'40%',padding:'5%'}}>
          <label> Data Driven and Scientific  </label>
          <label>Using data and natural language processing we're able to predict your Personality based on the most popular Personality model used in the psychology community, the Five Factor Personality model</label>
          <label style={{color:'pink','marginTop':10}}>find more.... </label>
        </label>
        <img
            style={{display: 'flex',maxWidth: '50%', maxHeight: 'auto',padding:'5%'}}
            src={scheme_small} alt="scheme" 
        />
      </nav>

      <nav style={{display:'flex','flexDirection':'row'}}>
        <img
          style={{display: 'flex',maxWidth: '50%', maxHeight: 'auto',padding:'5%'}}
          src={hand} alt="hand"
        />

        <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column','marginTop':20,maxWidth:'40%'}}>
          <label> Easy to Use  </label>
          <label > Faster than any other personality analysis out there. Just choose where and what you want us to analyze: your twitter , Facebook or Copy and paste  you blog, We'll have it analyzed in seconds.</label>
          <label style={{color:'pink','marginTop':10,}}>find more.... </label>
        </label>
      </nav>

      <nav style={{display:'flex','flexDirection':'row',alignItems:'center',justifyContent:'center'}}>
        <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column','marginTop':20,padding:20,maxWidth:'40%'}}>
          <label> Detailed Personality Reports  </label>
          <label >Free reports includes your personality profile, including 5 majors traits, values , and needs and text summary as well as graph representation of who you are </label>
          <label style={{color:'pink','marginTop':10,}}>Try out.... </label>
        </label>
        <img
          style={{display: 'flex',maxWidth: '50%', maxHeight: 'auto',padding:'5%', transform: [{ rotate: '14deg' }],}}
          src={ico_chart} alt="ico_chart"
        />
      </nav>
       <div style ={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column',width:'100%','backgroundColor':'#d3d3d3',paddingBottom:20,paddingTop:20
        }
      }>
         <label style ={{padding:20,'fontSize':18,'fontWeight':'bold'}}>Discover who You are....</label>
         <Link to="/description">
          <button style={{
              color:'white',
              'backgroundColor':'#f49608', 
              'borderRadius':20,
              padding: 10,
              borderColor:'transparent'
            }}>GET FREE ANALYSIS
          </button>
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
