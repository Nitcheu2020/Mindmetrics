import ReactDOM from "react-dom";
import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";
  import social_icons from './img/social_icons.png';
import logo_footer from './img/logo_footer.png';

const  Footer =(props)=>{
    return (
        <div style={{maxWidth:'100%'}}>
        <div style={{
            display: 'flex',
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginLeft:'15%',
           // maringTop:'5%'
          //  maxWidth:'100%',
          }}>
              <nav style={{
                flex:1,
                //'fontWeight': 'bold',
                display: 'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                alignSelf:'flex-start',
                //display:'inline-flex',
              }}>
                <Link to="/" style={{ textDecoration: 'none',padding:'1%',display:'flex' }}>HOME</Link>
                <Link to="/description" style={{ textDecoration: 'none',padding:'1%',display:'flex'}}>HOW IT WORKS</Link>
                <Link to="/blog" style={{ textDecoration: 'none',padding:'1%' }}>Blog</Link>
                <Link to="/research" style={{ textDecoration: 'none',padding:'1%',height: 'auto', }} >RESEARCH</Link>
                <Link to="/contact" style={{ textDecoration: 'none',padding:'1%' }}>CONTACT</Link>
                <Link to="/canvas" style={{ textDecoration: 'none',padding:'1%' }}>Canvas</Link>
                
              </nav>
              <img
                  style={{display: 'flex',alignSelf:'flex-end',marginRight:"20%",padding:'1%',width: '10%',
                  height: 'auto',}}
                  src={social_icons} alt="social_icons" 
                />
            </div>
  
          <div style={{ display: 'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            paddingLeft:'15%',
            paddingBottom:'1%'
            }}
          >
            <nav style={{
                flex:1,
                //'fontWeight': 'bold',
                display: 'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                alignSelf:'flex-start',
                //display:'inline-flex',
              }}>
              <label 
                style={{
                    background: '#fff',
                    border: '1px solid #CDC',
                    borderRadius:'50%',
                    padding: '0.5%',
                    color:'#CDC'
                }}
              >
                   R
              </label>
              <label style={{display:'flex',padding:10,color:'#CDC'}}> Mindmetrics Technology. All rights reserved.</label>
            </nav>
            <img
              style={{display: 'flex',transform: [{ rotate: '14deg' }],alignSelf:'flex-end',marginRight:"20%"}}
              src={logo_footer} alt="logo_footer" 
            />
          </div>
          </div>
    );
  }
  export default Footer;    