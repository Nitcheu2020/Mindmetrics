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
import Reportblurred from  './img/Reportblurred.jpg' ;
import getpremiumillustration from './img/getpremiumillustration.png';
import ico_discuss from './img/ico_discuss.png';

const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}
const heightScreen = (taille) =>  {
  return taille * 100/2610 + 'vw';
} 

const premiumButtonStyle = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  position:'absolute',
  alignItems:'column',
  borderColor:'#d3d3d3',
  borderStyle:'groove',
  borderRadius:4,
  paddingLeft:heightScreen(100),
  paddingRight:heightScreen(100),
  paddingTop:heightScreen(100),
  paddingBottom:heightScreen(100),
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  backgroundColor:'rgba(0, 0, 0, 0.05)'
  
};

Modal.setAppElement('#root');


const Resultat = (props) => {


const [showResult, SetShowResult] = useState(false);
const [progress, SetProgress] = useState(0);
const [counting, setCounting] = useState(true);
const [error,setError] = useState(null);
const [isLoaded,setIsLoaded] = useState(false);
const [items,setItems] = useState([]);
const [ imgSrc, setImgSrc] = useState(null);
const [ url, setUrl] = useState(null);


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
          imageRef.putString(image.src, 'data_url')
        //  .then(function(snapshot) { })
          .then(() => imageRef.getDownloadURL())
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

let background = location.state && location.state.progress;

  
let resultat1level =  props.resultat1level ? props.resultat1level : location.state && location.state.resultat1level;
let resultat2level =  props.resultat2level ? props.resultat2level : location.state && location.state.resultat2level;
let resultat3level =  props.resultat3level ? props.resultat3level : location.state && location.state.resultat3level;
let resultat4level =  props.resultat4level ? props.resultat4level : location.state && location.state.resultat4level;
let resultat5level =  props.resultat5level ? props.resultat5level : location.state && location.state.resultat5level;

let reslt = [resultat1level,resultat2level,resultat3level,resultat4level,resultat5level];
let i=0, title="",numtitle=0;

for (i=0;i<reslt.length;i++){
  if (reslt[i]> reslt[numtitle]) numtitle = i;
}

switch (numtitle) {
  case 0:
    title =  'Extravert';
    break;
  case 1:
    title =  'Agreeable';
  case 2:
    title =  'Conscious';
    break;
  case 3:
    title =  'Emotionally Stable';
    break;
  case 4:
    title = 'Intellectual';
    break;

  default:
    break;
}

var text1=-1, text2=-1, text3=-1, text4=-1 , text5=-1;


 
text1 =  resultat1level>50 ? 'More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.' : 'Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.'

text2 = resultat2level>50 ? 'Value getting along with others. They have a more optimistic view of human nature.' : 'Value self interests over others. They are more skeptical of others\' motives.'

text3 = resultat3level>50 ?  'More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.' :  'More likely to prefer the spontaneous over the planned.'

text4 = resultat4level>50 ? '**This demo cannot diagnose a mental illness.**  More likely to have negative emotions or get upset. It could mean they are going through a tough time.' : 'More calm and less likely to get upset. It does not mean they are positive, or happy people.'

text5 = resultat5level>50 ? 'Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.' : 'Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.'




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


const container = {
 // paddingTop:74,
  backgroundColor:'#d3d3d3',
};

const navName = {
  fontSize:35,
  paddingBottom:heightScreen(33), 
  borderBottom: '2px solid 	#c0c0c0',
  //width:'80%',
  marginBottom:heightScreen(33),
  fontFamily:'Open Sans Bold',
};

const displayName = firebaseService.auth().currentUser?.displayName;
return (
  <div style={container}  >

<div class="content flow"   style={{padding:'10%'}}>
          <div class="grid-ish"  ref={photoRef}   style={{display:'flex',alignItems:'center',}}>
            <div style={{ border: '2px solid white',borderStyle:'none',textAlign:'flex-start',paddingBottom:100}} id="resultText" class="col"> 
            <div > 
        <nav style={navName}>
          {displayName? displayName:""}
        </nav>
        <nav>
            <label style={{fontSize:26,fontFamily:'Open Sans Italic'}}>{TextKey.resultPage.youAre}</label> 
        </nav>
        <label style={{fontSize:38,fontFamily:'Open Sans Italic',paddingBottom:heightScreen(29)}}>{title}</label> 
        <nav id="em8" style={{display:'flex'}}>
          <label style={{ borderBottom: '2px solid 	#c0c0c0',paddingBottom:'1vw',fontSize:22,fontFamily:'Open Sans Light'}}>
            {text1} 
            {<br/>} {<br/>}
            {text2}
            {<br/>} {<br/>}
            {text3}
            {<br/>} {<br/>}
            {text4}
            {<br/>} {<br/>}
            {text5}
          </label>
        </nav>
        <div style={{paddingTop:heightScreen(40),flexDirection:'row',display:'flex',justifyContent:'flex-start', alignItems:'center',}}>
          <label style={{display:'flex',fontSize:20,paddingRight:'0.5vw',marginTop:-18,fontFamily:'Open Sans Bold'}}>
            {TextKey.resultPage.shareResult} 
          </label>
          {url? <Blog url={url}/>:null}
        </div>
      </div>



            </div>
            <div  class="col"  id="em9" style={{borderStyle:'none',display:'flex',justifyContent:'flex-start'}} > 
               

              <div style={{flexDirection:'column',justifyContent:'flex-start',
              
             paddingLeft:widthScreen(52),
             paddingRight:widthScreen(62),
             paddingTop:heightScreen(50),
             paddingBottom:heightScreen(70),
             marginBottom: heightScreen(91),
             alignItems:'center',
             flexGrow:1,
             //width:'35em',
             backgroundColor:'white',
             boxShadow: '1px 1px 1px 1px  #d3d3d3',
             borderTop:'1px',
             borderColor:'#d3d3d3'
            
              }}>
                <Gauge level ={resultat1level} title="Extraversion" color="#ff0f33"/>
                <Gauge level ={resultat2level} title="Agreeableness" color="#41ac97"/>
                <Gauge level ={resultat3level} title="Conscientiousness" color="#cb0c86"/>
                <Gauge level ={resultat4level} title="Emotional" color="#04b2ca"/>
              <Gauge level ={resultat5level} title="Stability/Intellect" color="#2c719d"/>  

              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img  
                src={ico_discuss} 
                  style={{
                    width: '10%',
                    height: 'auto',
                  }} 
                  alt="ico_discuss"
                />  
                <label style={{paddingLeft:10,fontFamily:'Open Sans Bold',fontSize:20,}}> How to read this Report ?</label>
              </div>

            </div>
          </div>
        </div>
      </div>

    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '100%'
    }}>
      <img  
        src={Reportblurred} 
        style={{
          width: '100%',
          height: 'auto',
        }} 
        alt="Reportblurred"
      /> 


      <div 
        style={premiumButtonStyle}
      >
        <MindButton paddingHorizontal={30}func={savingPremium} textSize={20.5} marginBottom={50}  text={TextKey.resultPage.premiumReport} />
        <img  
        src={getpremiumillustration} 
          style={{
            width: '40%',
            height: 'auto',
           // margin:10
          }} 
          alt="Reportblurred"
        /> 
        
      </div>
    </div>
    <Footer text={true} url={url}/>
  </div> 
  );
  };

  export default Resultat;