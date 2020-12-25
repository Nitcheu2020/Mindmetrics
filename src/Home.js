import React from 'react';

import result from "./img/result.png";
import results from "./img/results.png";
import faces from './img/faces.png';
import scheme_small from './img/scheme_small.png';
import hand from './img/hand.png';
import main from './img/main.png';
import people from './img/people.png';
import imgbackground from './img/imgbackground.png';
import Gauge from './Gauge';
import duplicatePeople from  './img/duplicatePeople.png';
import personalitybars from './img/personalitybars.png';

import ico_chart from './img/ico_chart.png';
import social_icons from './img/social_icons.png';
import logo_footer from './img/logo_footer.png';
import MindButton from './components/MindButton';
import Footer from './Footer';
import TextKey from './text/TextKey';

import ModalAnswers from './ModalAnswers';
import {
    Link
  } from "react-router-dom";

const widthScreen = (taille) =>  {
    return taille * 100/2063 + 'vw';
  }
  const heightScreen = (taille) =>  {
    return taille * 100/2610 + 'vw';
  } 
  const  fontSize = widthScreen(19);
  const padding = widthScreen(12);

const  Home =(props) =>{
    return (
    <>
      <div style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column',maxWidth:'100%',backgroundImage: `url(${imgbackground})`}}>
        <label style={{fontSize:widthScreen(46.5),fontFamily:'Open Sans Light',paddingTop:heightScreen(64),paddingBottom:heightScreen(29)}}> {TextKey.home.title}</label>
          <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column'}}>
          <label style={{fontSize:widthScreen(22),fontFamily:'Open Sans Light'}}> {TextKey.home.writing}</label>
          <label style={{fontSize:widthScreen(22),fontFamily:'Open Sans Light',paddingBottom:heightScreen(29)}} > {TextKey.home.report}</label>
        </label>
        <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
          <MindButton  textSize={widthScreen(22)} text={TextKey.button.freeAnalysis} marginBottom={heightScreen(53)}/>
        </Link>
        <img
          style={{
            display: 'flex',
            maxWidth: '100%', maxHeight: '100%',
          }}
          src={results} alt="results" 
        />
        <img
          style={{
            display: 'flex',maxWidth: '100%', maxHeight: 'auto',paddingBottom:heightScreen(70)
          }}
          src={faces} 
          alt="faces"
        />
        <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column','fontSize':widthScreen(40),fontFamily:'Open Sans Light',paddingBottom:heightScreen(51)}}>
          <label>  {TextKey.home.words}</label>
          <label>{TextKey.home.about}</label>
        </label>
        <label style={{justifyContent:'center',display:'flex','flexDirection':'column',alignItems:'center',fontSize:widthScreen(22),fontFamily:'Open Sans Light'}}>
          <label> {TextKey.home.writingSample} </label>
        <label>{TextKey.home.wordAndPersonality}</label>
          <label>{TextKey.home.exactly}</label>
          <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
            <label style={{color:'#ba097d','marginTop':heightScreen(10),alignSelf:'center',paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>{TextKey.home.findOrMore} &gt; </label>
          </Link>
        </label>
        <nav style={{display:'flex','flexDirection':'row',width:'100%',alignItems:'center',justifyContent:'center',borderTop: '1px solid #d3d3d3',marginTop:heightScreen(86)}}>
          <label style={{display: 'flex','flexDirection':'column'}}>
            <a style={{fontSize:widthScreen(40), fontFamily:'Open Sans Light',width:widthScreen(298.47)}} name="hwItW"> {TextKey.home.dataDriven} </a>
            <label style={{fontSize:widthScreen(22), fontFamily:'Open Sans Light',width:widthScreen(298.47)}}>{TextKey.home.usingData}</label>
            <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
              <label style={{color:'#ba097d','marginTop':heightScreen(10),paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>{TextKey.home.findOrMore} &gt;</label>
            </Link>
          </label>
          <img
            style={{maxWidth:'100%'}}
            src={duplicatePeople} alt="duplicatePeople" 
          />
        </nav>
        <nav style={{display:'flex','flexDirection':'row',backgroundColor:'#d3d3d3',width:'100%',paddingTop:heightScreen(50),paddingBottom:heightScreen(50),alignItems:'center',justifyContent:'center'}}>
          <img
            style={{display: 'flex',maxWidth: widthScreen(503), maxHeight: 'auto',alignSelf:'flex-end',paddingRight:widthScreen(50)}}
            src={main} alt="hand"
          />
          <label style={{display: 'flex','justifyContent':'center','flexDirection':'column',width:widthScreen(300)}}>
            <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(40),paddingBottom:heightScreen(30),marginBottom:heightScreen(33)}}>{TextKey.home.easyToUse}</label>
        <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(22)}}> {TextKey.home.faster}</label>
            <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
              <label style={{color:'#ba097d','marginTop':heightScreen(10),alignSelf:'center',paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}> {TextKey.home.tryOut} &gt; </label>
            </Link>
          </label>
        </nav>
        <nav style={{display:'flex','flexDirection':'row',paddingBottom:heightScreen(100),paddingTop:heightScreen(116),justifyContent:'center',alignItems:'center',marginLeft:widthScreen(515)}}>
          <label style={{display: 'flex','flexDirection':'column'}}>
            <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(40),paddingBottom:heightScreen(30),marginBottom:heightScreen(33)}}>{TextKey.home.detailedPersonality}</label>
            <label style={{fontFamily:'Open Sans Light',fontSize:widthScreen(22),width:'80%',display:'flex',}}>{TextKey.home.freeReport} </label>
            <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
              <label style={{color:'#ba097d','marginTop':heightScreen(10),paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>{TextKey.home.tryOut}&gt; </label>
            </Link>
          </label>
            <img  style={{maxWidth:'100%',maxHeight:'auto',paddingRight:widthScreen(380)}} src={personalitybars}/>
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
          <label style ={{'fontSize':widthScreen(40),'fontFamily':'Open Sans Light',paddingBottom:heightScreen(22)}}>{TextKey.home.discover}</label>
          <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
            <MindButton  textSize={widthScreen(22)} text={TextKey.button.freeAnalysis} />
          </Link>
        </div>
      </div>
      <Footer/>
    </>
    );
  }
  export default Home;