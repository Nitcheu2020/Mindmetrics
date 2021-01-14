import React from 'react';
import './mediaQuery.css';
import result from "./img/result.png";
import results from "./img/results.png";
import faces from './img/faces.png';

import orangef from "./img/img_orange_flowers.jpg";

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
    //title => style={{fontSize:46.5,fontFamily:'Open Sans Light',paddingTop:heightScreen(64),paddingBottom:heightScreen(29)}}
    //label after title... style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column'}}
    //paddingRight:'10%',marginLeft:'10%',
    return (
    <>
      <div style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column',maxWidth:'100%',backgroundImage: `url(${imgbackground})`}}>
        <label id="title" style={{fontSize:28.5,paddingRight:'20%',paddingLeft:'20%',paddingTop:64,paddingBottom:30,textAlign:'center',fontFamily:'Open Sans Light'}}> {TextKey.home.title}</label>
          <label  id="report" style={{fontSize:22,fontFamily:'Open Sans Light',textAlign:'center',paddingBottom:30,}}> {TextKey.home.writing} {TextKey.home.report}</label>
        <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
          <MindButton  textSize={22} text={TextKey.button.freeAnalysis} marginBottom={53}/>
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
        <label style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column','fontSize':40,fontFamily:'Open Sans Light',paddingBottom:51}}>
          <label>  {TextKey.home.words}</label>
          <label>{TextKey.home.about}</label>
        </label>
        <label id="writingSample" style={{ paddingRight:'21%',paddingLeft:'21%',justifyContent:'center',display:'flex','flexDirection':'column',textAlign:'center',alignItems:'center',fontSize:22,fontFamily:'Open Sans Light'}}>
          <label> {TextKey.home.writingSample} </label>
        <label>{TextKey.home.wordAndPersonality} {TextKey.home.exactly}</label>
          <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
            <label style={{color:'#ba097d','marginTop':heightScreen(10),alignSelf:'center',paddingBottom:heightScreen(86),fontFamily:'Open Sans Light'}}>{TextKey.home.findOrMore} &gt; </label>
          </Link>
        </label>


        <div class="content flow"   style={{padding:'10%'}}>
          <div class="grid-ish"  id="duplicatePeople" style={{display:'flex',alignItems:'center'}}>
            <div style={{ border: '2px solid white',borderStyle:'none',textAlign:'flex-start',paddingLeft:'10%',paddingRight:'10%',paddingBottom:100,paddingTop:116}} class="col"> 
                <nav  style={{fontFamily:'Open Sans Light',fontSize:40,paddingBottom:10}}>{TextKey.home.dataDriven}</nav>
                <nav style={{fontFamily:'Open Sans Light',fontSize:22,marginBottom:30}} > {TextKey.home.usingData}</nav>
                <div style={{textAlign:'center'}}>
                  <Link  to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
                      <label  style={{color:'#ba097d',fontFamily:'Open Sans Light'}}> {TextKey.home.findOrMore} &gt; </label>
                  </Link>
                </div>
            </div>
            <div id="newImgPersonality" class="col" style={{borderStyle:'none',display:'flex',justifyContent:'flex-end',maginLeft:'10em'}} > 
                <img
                id="imgPersonality"
                style={{display: 'flex',maxWidth: 'auto', maxHeight: 'auto'}}
                src={duplicatePeople} alt="duplicatePeople"
              />
            </div>
          </div>
        </div>

      
        <img 
            alt="image "
            src= '/img_orange_flowers.jpg'
            srcset="img_pink_flowers.jpg 240w, img_white_flower.jpg 300w, large.jpg 720w"
            sizes="(min-width: 960px) 540px, 100vw"
          />

        <img src={"/img_orange_flowers.jpg"} />


      <div class="content flow"   style={{backgroundColor:'red',}}>
          <div class="grid-ish1" id="grid1" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

          <div class="col" id="main" style={{borderStyle:'none',display:'flex',justifyContent:'center'}} > 
                <img
                id="imgPersonality"
                style={{display: 'flex',maxWidth: 'auto', maxHeight: 'auto'}}
                src={main} alt="main"
              />
            </div>
            
            <div id="mainText" style={{ border: '2px solid white',borderStyle:'none',textAlign:'center'}} class="col"> 
              
                <nav  style={{fontFamily:'Open Sans Light',fontSize:40,paddingBottom:10}}>{TextKey.home.easyToUse}</nav>
                <nav style={{fontFamily:'Open Sans Light',fontSize:22,marginBottom:30}} > {TextKey.home.faster}</nav>
                <div>
                  <Link  to="/description" transition="glide-right" style={{ textDecoration: 'none'}}>
                      <label  style={{color:'#ba097d',fontFamily:'Open Sans Light'}}> {TextKey.home.tryOut} &gt; </label>
                  </Link>
                </div>
            </div>
           
          </div>
        </div>      
        
       

       <div class="content flow"   style={{padding:'10%'}}>
         <div  style={{display:'flex',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
          <img id="my-content" src={ico_chart} alt="ico_chart" />
         </div>
          <div class="grid-ish" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{ border: '2px solid white',borderStyle:'none',textAlign:'center',paddingLeft:'10%',paddingRight:'10%'}} class="col"> 
                <nav  style={{fontFamily:'Open Sans Light',fontSize:40,paddingBottom:10}}>{TextKey.home.detailedPersonality}</nav>
                <nav style={{fontFamily:'Open Sans Light',fontSize:22,marginBottom:30}} > {TextKey.home.freeReport}</nav>
                <div>
                  <Link  to="/description" transition="glide-right" style={{ textDecoration: 'none'}}>
                      <label  style={{color:'#ba097d',fontFamily:'Open Sans Light'}}> {TextKey.home.tryOut} &gt; </label>
                  </Link>
                </div>
            </div>
            <div  id="personalitybars" > 
                <img
                style={{display: 'flex',maxWidth: 'auto', maxHeight: 'auto'}}
                src={personalitybars} alt="personalitybars"
              />
            </div>
          </div>
        </div>
        

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
          <label style ={{'fontSize':40,'fontFamily':'Open Sans Light',paddingBottom:22}}>{TextKey.home.discover}</label>
          <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
            <MindButton  textSize={22} text={TextKey.button.freeAnalysis} />
          </Link>
        </div>



      </div>          
      <Footer/>
    </>
    );
  }
  export default Home;