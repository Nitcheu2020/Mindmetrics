import ReactDOM from "react-dom";
import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";
  import social_icons from './img/social_icons.png';
import logo_footer from './img/logo_footer.png';
import Menu from './Menu';
import Blog from './Blog';

const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}
const heightScreen = (taille) =>  {
  return taille * 100/2610 + 'vw';
} 

const  Footer =(props)=>{
    return (
        <div style={{maxWidth:'100%',backgroundColor:'white'}}>
          {props.text?<div style={{backgroundColor:'#CDCDCD',justifyContent:'center',display:'flex',padding:'2%',alignSelf:'flex-end',flexDirection:'column',
            maringBottom:heightScreen(60)
          }}>
              <label  style={{alignSelf:'center',fontSize:widthScreen(40),fontFamily:'Open Sans Light',paddingBottom:heightScreen(36)}}> Ask Your Friends and Family to Take the Test Too!</label>
                <div style={{alignSelf:'center'}}> 
                  <Blog url={props.url}/>
                </div>
              </div>:null
          }
          <div style={{
              display: 'flex',
              flex:1,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              marginLeft:'15%',
              paddingBottom:heightScreen(39),
              paddingRight:widthScreen(360),
              paddingTop:heightScreen(60)
            //  maxWidth:'100%',
            }}
          >
              
            <Menu/>
            <img
              style={{display: 'flex',alignSelf:'flex-end',width: '10%',
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
              style={{display: 'flex',transform: [{ rotate: '14deg' }],alignSelf:'flex-end',paddingRight:widthScreen(360)}}
              src={logo_footer} alt="logo_footer" 
            />
          </div>
        </div>
    );
  }
  export default Footer;    