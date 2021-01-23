import React,{useEffect,useState} from 'react';
import './mediaQuery.css';
import result from "./img/result.png";
import results from "./img/results.png";
import faces from './img/faces.png';
import {
  useLocation,
} from "react-router-dom";

import scheme_small from './img/scheme_small.png';
import hand from './img/hand.png';
import main from './img/main.png';
import plus  from './img/plus.png';
import cross  from './img/cross.jpg';

import people from './img/people.png';
import imgbackground from './img/imgbackground.png';
import checkmarksmall from './img/checkmarksmall.png';
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
  
const  Home =(props) =>{
    const [text1,setText1] = useState(false);
    const [text2,setText2] = useState(false);
    const [text3,setText3] = useState(false);
    const [widthSize,setwidthSize] = useState(window.innerWidth);
    //title => style={{fontSize:46.5,fontFamily:'Open Sans Light',paddingTop:heightScreen(64),paddingBottom:heightScreen(29)}}
    //label after title... style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column'}}
    //paddingRight:'10%',marginLeft:'10%',
    var location = useLocation();
    useEffect(() => {
      props.func(location.pathname);  
      //console.log("DANS LE USE EFFECT USEEFFCET USEEFFCET ");
      

      window.addEventListener("resize", function() {
       // return window.innerWidth;
        setwidthSize(window.innerWidth);
      });
     /* alert("Your screen resolution is: " + window.innerWidth + "x" + window.innerHeight);*/
    },[]);

   
      console.log("aadadsasd???????",location.pathname);
    return (
    <>
      <div style={{display: 'flex','alignItems':'center','justifyContent':'center','flexDirection':'column',maxWidth:'100%',backgroundImage: `url(${imgbackground})`}}>
        <label id="title" style={{fontSize:28.5,paddingRight:'20%',paddingLeft:'20%',paddingTop:64,paddingBottom:30,textAlign:'center',fontFamily:'Open Sans Light'}}> {TextKey.home.title}</label>
          <label  id="report" style={{fontSize:22,fontFamily:'Open Sans Light',textAlign:'center',paddingBottom:30,}}> {TextKey.home.writing} {TextKey.home.report}</label>
        <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
          <MindButton  textSize={22} text={TextKey.button.freeAnalysis} marginBottom={53}/>
        </Link>
        <img
          id="resultImage"
          style={{
            maxWidth: '100%', maxHeight: '100%',
          }}
          src={results} alt="results" 
        />
        <img
          id="faceImage"
          style={{
            maxWidth: '100%', maxHeight: 'auto',paddingBottom:70
          }}
          src={faces} 
          alt="faces"
        />
        <label  id="wordSayBoutU" style={{'alignItems':'center','justifyContent':'center','flexDirection':'column','fontSize':40,fontFamily:'Open Sans Light',paddingBottom:51}}>
          <label>  {TextKey.home.words}</label>
          <label>{TextKey.home.about}</label>
        </label>
        <label id="writingSample" style={{ paddingRight:'21%',paddingLeft:'21%',justifyContent:'center','flexDirection':'column',textAlign:'center',alignItems:'center',fontSize:22,fontFamily:'Open Sans Light'}}>
          <label> {TextKey.home.writingSample} </label>
        <label id="findMore" >{TextKey.home.wordAndPersonality} {TextKey.home.exactly}</label>
          <Link to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
            <label style={{color:'#ba097d','marginTop':10,alignSelf:'center',paddingBottom:86,fontFamily:'Open Sans Light'}}>{TextKey.home.findOrMore} &gt; </label>
          </Link>
        </label>


        <div class="content flow"  id= "smallParagraph">
          <div class="grid-ish"  id="duplicatePeople" style={{display:'flex',alignItems:'center'}}>
          { (widthSize >= 775 ||  text1) ?<div style={{ border: '2px solid white',borderStyle:'none',textAlign:'flex-start',paddingLeft:'10%',paddingRight:'10%',paddingBottom:100,paddingTop:116}} class="col"> 
                <nav id="hwItW" style={{fontFamily:'Open Sans Light',fontSize:40,paddingBottom:10}}>{TextKey.home.dataDriven}</nav>
                <nav style={{fontFamily:'Open Sans Light',fontSize:22,marginBottom:30}} > {TextKey.home.usingData}</nav>
                <div style={{textAlign:'center'}}>
                  <Link  to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
                      <label  style={{color:'#ba097d',fontFamily:'Open Sans Light'}}> {TextKey.home.findOrMore} &gt; </label>
                  </Link>
                </div>
            </div> : null}
            <div id="newImgPersonality" class="col" style={{borderStyle:'none',display:'flex',justifyContent:'flex-end',maginLeft:'10em'}} > 
                <img
                id="imgPersonality"
                style={{display: 'flex',maxWidth: 'auto', maxHeight: 'auto'}}
                src={duplicatePeople} alt="duplicatePeople"
              />
            </div>
            <div>
              {!text1 ?<img src={plus}  id="plusCross" style={{width:'25%',height:'25%',flexGrow:0,alignSelf:'center'}}  onClick={() => setText1(!text1)} />: null}
              {text1?<img src={cross}   id="plusCross" style={{width:'5%',height:'5%',flexGrow:0}} onClick={() => setText1(!text1)}  />:null}
            </div>
          </div>
        </div>


      <div class="content flow"   id= "smallParagraph" style={{backgroundColor:'red',}}>
          <div    class="grid-ish1" id="grid1" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

          <div class="col" id="main" style={{borderStyle:'none',display:'flex',justifyContent:'center'}} > 
                <img
                id="imgPersonality"
                style={{display: 'flex',maxWidth: 'auto', maxHeight: 'auto'}}
                src={main} alt="main"
              />
            </div>
            
            { widthSize >= 775 ||  text2 ?<div id="mainText" style={{ border: '2px solid white',borderStyle:'none',textAlign:'center'}} class="col"> 
              
                <nav  style={{fontFamily:'Open Sans Light',fontSize:40,paddingBottom:10}}>{TextKey.home.easyToUse}</nav>
                <nav style={{fontFamily:'Open Sans Light',fontSize:22,marginBottom:30}} > {TextKey.home.faster}</nav>
                <div>
                  <Link  to="/description" transition="glide-right" style={{ textDecoration: 'none'}}>
                      <label  style={{color:'#ba097d',fontFamily:'Open Sans Light'}}> {TextKey.home.tryOut} &gt; </label>
                  </Link>
                  
                </div>
                {text2?<img src={cross}   id="plusCross" style={{width:'5%',height:'5%',flexGrow:0,paddingTop:'2%'}} onClick={() => setText2(!text2)}  />:null}
            </div>:null}
            {!text2 ?<img src={plus}  id="plusCross" style={{width:'25%',height:'25%',flexGrow:0}}  onClick={() => setText2(!text2)} />: null}
          </div>
        </div>      
        
          
       <div class="content flow"  id= "smallParagraph"   style={{padding:'3%'}}>
         <div    style={{display:'flex',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
          <img id="my-content" src={ico_chart} alt="ico_chart" />
         </div>
          <div class="grid-ish" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          { widthSize >= 775 ||   text3 ?<div style={{ border: '2px solid white',borderStyle:'none',textAlign:'center',paddingLeft:'10%',paddingRight:'10%'}} class="col"> 
                <nav  style={{fontFamily:'Open Sans Light',fontSize:40,paddingBottom:10}}>{TextKey.home.detailedPersonality}</nav>
                <nav style={{fontFamily:'Open Sans Light',fontSize:22,marginBottom:30}} > {TextKey.home.freeReport}</nav>
                <div>
                  <Link  to="/description" transition="glide-right" style={{ textDecoration: 'none'}}>
                      <label  style={{color:'#ba097d',fontFamily:'Open Sans Light'}}> {TextKey.home.tryOut} &gt; </label>
                  </Link>
                </div>
            </div>:null}
            <div  id="personalitybars" > 
                <img
                style={{display: 'flex',maxWidth: 'auto', maxHeight: 'auto'}}
                src={personalitybars} alt="personalitybars"
              />
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              {!text3 ?<img src={plus}  id="plusCross" style={{width:'25%',height:'25%',flexGrow:0}}  onClick={() => setText3(!text3)} />: null}
              {text3?<img src={cross}   id="plusCross" style={{width:'5%',height:'5%',flexGrow:0}} onClick={() => setText3(!text3)}  />:null}
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