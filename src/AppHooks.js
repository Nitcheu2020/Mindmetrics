import React from 'react';
import App from './App.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {
    useLocation,
  } from "react-router-dom";



import Description from './Description';
import LoginForm from './LoginForm';
import Canvas from './Canvas';
import Footer from './Footer';
import Home from './Home';
import MediaQuery from './MediaQuery';
import Blog from './Blog';
import ErrorBoundary from './ErrorBoundary';

export default function AppHooks() {
    console.log("asddsd ????????????????????????????????????");
  return (
    <ErrorBoundary>
    <Router>
        <App/>
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
      <Description />
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


function Research() {
    return <h2>Reesearch </h2>;
  }
  
  function Contact() {
    return <h2>Contact</h2>;
  }
