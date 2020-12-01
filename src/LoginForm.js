import React from 'react';
import {Motion, spring} from 'react-motion';
import giphy from './gif/giphy.gif';
import {
  Link
} from "react-router-dom";

const LoginForm = () => {
    console.log("sdascasdcasda adadcascdas adasdcaa adacsd adsascda asdascdad adas ");
    const start = Date.now();

    console.log('starting timer...');
    // expected output: starting timer...
    const millis = Date.now() - start;
   // while (Math.floor(millis / 1000) <5) console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);

    return (
      <div style={{
       // background: `url('giphy') no-repeat center center`,
        background: `url(${giphy}) no-repeat center center`,
        backgroundColor:'black',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        'z-index': 9999999,
        alignItems:'center',
        justifyContent:'center',
        display:'flex'
      }}>
        <h1 style={{color:'white',display:'flex'}}>SCORE CALCULATION</h1>
        {setTimeout(function(){ return <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link> }, 3000)}
        
      </div>
    );
  };

  export default LoginForm;