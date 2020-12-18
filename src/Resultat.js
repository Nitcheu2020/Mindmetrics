import React,{useState,useEffect,useRef} from 'react';
import giphy from './gif/giphy.gif';
import Gauge from './Gauge';
import html2canvas from 'html2canvas';
import firebaseService from './firebaseService';
import firebase from "firebase/app";
import Modal from 'react-modal';
import bgHeader from './img/bg-header.png';
import Blog from './Blog';
import MindButton from './components/MindButton';
import Footer from './Footer';
import {useLocation } from "react-router-dom";
import TextKey from './text/TextKey';
const premiumButtonStyle = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  position:'absolute',
};

Modal.setAppElement('#root');
const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}
const heightScreen = (taille) =>  {
  return taille * 100/2610 + 'vw';
} 

const Resultat = (props) => {
  const photoRef = useRef(null);
  const outputRef = useRef(null);
  useEffect(() => {
    function decompte() {
      let i = 0;
      if (i == 0) {
        i = 1;
        var width = 1;
        var id = setInterval(frame, 100);
        function frame() {
          if (width >= 100) {
            SetShowResult(true);
            setCounting(false);
          } else {
            width++;
            SetProgress(width);
          }
        }
      }
    }   

    function  takeshot () { 
      const  id =  guid();
      html2canvas(photoRef.current).then( 
        function (canvas) { 
          let image = new Image();
          image.src = canvas.toDataURL();
          setImgSrc(image.src);
          const imageRef = firebaseService.storage().ref('images').child(id)
          imageRef.putString(image.src, 'data_url').then(function(snapshot) {
          }).then(() => imageRef.getDownloadURL())
        .then(url =>{
          console.log('Finally getting the URL...',url);
          setUrl(url);
        })
      }) 
    }
    decompte();
    takeshot ();
}, [])

let location = useLocation();
const [showResult, SetShowResult] = useState(false);
const [progress, SetProgress] = useState(0);
const [counting, setCounting] = useState(true);
const [error,setError] = useState(null);
const [isLoaded,setIsLoaded] = useState(false);
const [items,setItems] = useState([]);
const [ imgSrc, setImgSrc] = useState(null);
const [ url, setUrl] = useState(null);

let background = location.state && location.state.progress;

  
let resultat1level =  location.state && location.state.resultat1level;
let resultat2level =  location.state && location.state.resultat2level;
let resultat3level =  location.state && location.state.resultat3level;
let resultat4level =  location.state && location.state.resultat4level;
let resultat5level =  location.state && location.state.resultat5level;

let resultat1title =  location.state && location.state.resultat1title;
let resultat2title =  location.state && location.state.resultat2title;
let resultat3title =  location.state && location.state.resultat3title;
let resultat4title =  location.state && location.state.resultat4title;
let resultat5title =  location.state && location.state.resultat5title;

let resultat1color =  location.state && location.state.resultat1color;
let resultat2color =  location.state && location.state.resultat2color;
let resultat3color =  location.state && location.state.resultat3color;
let resultat4color =  location.state && location.state.resultat4color;
let resultat5color =  location.state && location.state.resultat5color;

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
} 

const savingPremium = () =>{
  const userId = firebaseService.auth().currentUser.uid;
  firebaseService.database().ref('premium').once("value",snapshot => {
    if (snapshot.exists()){
      firebaseService.database().ref('premium').once("value",snapshot => {
        if (!Object.values(snapshot.val()).includes(userId)){
          firebaseService.database().ref('premium/').push(userId);  
        }
      });
    }
    else{
      firebaseService.database().ref('premium/').push(userId);  
    }
  });
  alert("You have successfully been added to the Wait List for the premium Test. we will contact you soon ")
}

const gaugeStyle ={
  justifyContent:'center',
  margingLeft:widthScreen(95),
  paddingLeft:widthScreen(52),
  paddingRight:widthScreen(62),
  paddingTop:heightScreen(50),
  paddingBottom:heightScreen(70),
  marginBottom: heightScreen(91),
  alignItems:'center',
  width:widthScreen(621),
  backgroundColor:'white',
  boxShadow: '1px 1px 1px 1px  #d3d3d3',
  borderTop:'1px',
  borderColor:'#d3d3d3'
};

const container = {
  paddingTop:heightScreen(74),
  backgroundColor:'#d3d3d3'
};

const sousContainer = {
  display:'flex',
  flexDirection:'row',
  backgroundColor:'#d3d3d3',
  justifyContent:'space-between',
  paddingLeft: widthScreen(360), 
  paddingRight: widthScreen(360)
};
const paddingName = {
  width:'25.7vw', 
  paddingTop: heightScreen(8)
};
const navName = {
  fontSize:widthScreen(35),
  paddingBottom:heightScreen(33), 
  borderBottom: '2px solid 	#c0c0c0',
  width:'100%',
  marginBottom:heightScreen(33),
  fontFamily:'Open Sans Bold',
};

return (
  <div style={container}  >
    <div style={sousContainer} ref={photoRef}>
      <div  style={paddingName}> 
        <nav style={navName}>
          {TextKey.resultPage.yourName}
        </nav>
        <nav>
            <label style={{fontSize:widthScreen(26),fontFamily:'Open Sans Italic'}}>{TextKey.resultPage.youAre}</label> 
        </nav>
        <label style={{fontSize:widthScreen(38),fontFamily:'Open Sans Italic',paddingBottom:heightScreen(29)}}>{TextKey.resultPage.helpful}</label> 
        <nav style={{width:'25.7vw',display:'flex',paddingRight:'5vw'}}>
          <label style={{ borderBottom: '2px solid 	#c0c0c0',paddingBottom:'1vw',fontSize:widthScreen(22),fontFamily:'Open Sans Light'}}>
            {TextKey.resultPage.paragraph.first}
            {<br/>} {<br/>}
            {TextKey.resultPage.paragraph.second}
            {<br/>} {<br/>}
            {TextKey.resultPage.paragraph.third}
          </label>
        </nav>
        <div style={{paddingTop:heightScreen(40),flexDirection:'row',display:'flex',justifyContent:'flex-start', alignItems:'center',}}>
          <label style={{display:'flex',fontSize:'1vw',paddingRight:'0.5vw',marginTop:-18,fontFamily:'Open Sans Bold'}}>
            {TextKey.resultPage.shareResult} 
          </label>
          {url? <Blog url={url}/>:null}
        </div>
      </div>
      <div  style={gaugeStyle}> 
        <Gauge level ={resultat1level} title="betterthan" color="#ff0f33"/>
        <Gauge level ={resultat2level} title="betterthan1" color="#41ac97"/>
        <Gauge level ={resultat3level} title="betterthan2" color="#cb0c86"/>
        <Gauge level ={resultat4level} title="betterthan3" color="#04b2ca"/>
        <Gauge level ={resultat5level} title="betterthan4" color="#2c719d"/>
      </div>
    </div>
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '100%'
    }}>
      <img  
        src={bgHeader} 
        style={{
          width: '100%',
          height: 'auto',
        }} 
        alt="bgHeader"
      />  
      <div 
        style={premiumButtonStyle}
      >
        <MindButton paddingHorizontal={30} func={savingPremium} textSize={widthScreen(20.5)} text={TextKey.resultPage.premiumReport} />
      </div>
    </div>
    <Footer text={true} url={url}/>
  </div> 
  );
  };

  export default Resultat;