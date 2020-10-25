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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const divStyle = {
  flex:1,
  backgroundColor: '#d3d3d3',
  //'font-weight': 'bold',
   display: 'flex',
  'flex-direction':'row',
  'justify-content':'space-around',
  'align-items':'center'
};

const numberCircle ={
    'border-radius': '50%',
    width: 36,
    height: 36,
    padding: 8,
    background: '#fff',
    color: '#666',
    'text-align': 'center',
};
const imgStyle = {
  margin:'20'
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
    /*<div>
        <h1>TODO LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={e => this.handleChange(e)} />
          <button>Add</button>
          <ol>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>{item}
                  <button onClick={() => this.removeItem(index)}>Delete</button>
                </li>)
            })}
          </ol>
        </form>
      </div>*/
      /*backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2 */
    //<Link onClick={this.handleClick.bind(this)} />
    return (
      <div>
            <Router>
      <div >
        <nav>
          <ul style={divStyle}>

        <img
        style={{display: 'flex','margin-left': 50,padding:10}}
        src={logo} alt="Logo" />
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/description">HOW IT WORKS</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
             <li>
              <Link to="/research">RESEARCH</Link>
            </li>
             <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <button style={{
              color:'white',
              'background-color':'#FF6347',
              'border-radius':20,
              padding: 10,
            }}>TAKE TEST</button>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/research">
            <Research />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/description">
            <Description />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}

//export default App

function Home() {
  return (
    <div style={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column'}}>
    <h1>Your True Personality Revealed</h1>
    <label style={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column',}}>
    <label> We use your writing and social media profiles to build you a detailed </label>
    <label  >and accurate Personality report </label>
    </label>
    <button style={{
              'margin-top':20,
              color:'white',
              'background-color':'#FF6347',
              'border-radius':20,
              padding: 10,
            }}>GET FREE ANALYSIS</button>
    <img
        style={{display: 'flex','margin-left': 50,padding:10}}
        src={result} alt="result" />
    <img
        style={{display: 'flex','margin-left': 50,padding:10}}
        src={faces} alt="faces" />
    <label style={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column','margin-top':20,'font-size':25}}>
      <label> What Your Words  </label>
      <label>Says About You</label>
    </label>

    <label style={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column','margin-top':20,}}>
      <label> Your writing is a sample of how you think.Studying the patterns we've found in the way certain people of </label>
      <label>certain personalities use words, we can use your writing to determine using data,what kind of Personality</label>
      <label>you have exactly.</label>
       <label style={{color:'pink','margin-top':10}}>find more.... </label>
    </label>

    <nav style={{display:'flex','flex-direction':'row'}}>
    <label style={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column','margin-top':20,}}>
      <label> Data Driven and Scientific  </label>
      <label style={{width:305}}>Using data and natural language processing we're able to predict your Personality based on the most popular Personality model used in the psychology community, the Five Factor Personality model</label>
       <label style={{color:'pink','margin-top':10}}>find more.... </label>
    </label>
    <img
        style={{display: 'flex','margin-top': 50,padding:10}}
        src={scheme_small} alt="scheme" />
    </nav>

    <nav style={{display:'flex','flex-direction':'row'}}>
    <img
        style={{display: 'flex','margin-top': 50,padding:10,}}
        src={hand} alt="hand" />

    <label style={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column','margin-top':20,}}>
      <label> Easy to Use  </label>
      <label style={{width:310}}> Faster than any other personality analysis out there. Just choose where and what you want us to analyze: your twitter , Facebook or Copy and paste  you blog, We'll have it analyzed in seconds.</label>
       <label style={{color:'pink','margin-top':10,}}>find more.... </label>
    </label>

    </nav>

    <nav style={{display:'flex','flex-direction':'row'}}>
    <label style={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column','margin-top':20,padding:20}}>
      <label> Detailed Personality Reports  </label>
        <label style={{width:310}}>Free reports includes your personality profile, including 5 majors traits, values , and needs and text summary as well as graph representation of who you are </label>
         <label style={{color:'pink','margin-top':10,}}>Try out.... </label>
      </label>
      <img
        style={{display: 'flex','margin-top': 50,padding:10, transform: [{ rotate: '14deg' }],}}
        src={ico_chart} alt="ico_chart" />
    </nav>
       <div style ={{display: 'flex','align-items':'center','justify-content':'center','flex-direction':'column',width:'100%','background-color':'#d3d3d3',padding:20
        }
      }>
         <label style ={{padding:20,'font-size':18,'font-weight':'bold'}}>Discover who You are....</label>
          <button style={{
              color:'white',
              'background-color':'#FF6347',
              'border-radius':20,
              padding: 10,
            }}>GET FREE ANALYSIS
          </button>
      </div>

        <ul style={{
      //    backgroundColor: '#d3d3d3',
  //'font-weight': 'bold',
   display: 'flex',
  'flex-direction':'row',
  'justify-content':'center',
  'align-items':'center',
  width:'100%',
        }}>
          <nav style={{
             flex:1,
  //'font-weight': 'bold',
   display: 'flex',
  'flex-direction':'row',
  'justify-content':'space-around',
  'align-items':'center'
          }}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/description">HOW IT WORKS</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
             <li>
              <Link to="/research">RESEARCH</Link>
            </li>
             <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </nav>
        <img
        style={{display: 'flex','margin-left': 50,padding:10,'margin-right':20}}
        src={social_icons} alt="social_icons" />
          </ul>

        <div style={{display:'flex','flex-direction':'row','align-items':'center','justify-content':'center'}}>
          <label style={numberCircle}> R</label>
        <label> Mindmetrics Technology. All rights reserved.</label>
      <img
        style={{display: 'flex','margin-top': 50,padding:10, transform: [{ rotate: '14deg' }],}}
        src={logo_footer} alt="logo_footer" />
    </div>

    </div>
  );
}

function Description() {
  return <h2>This is how it works...</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}

function Research() {
  return <h2>Reesearch </h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
