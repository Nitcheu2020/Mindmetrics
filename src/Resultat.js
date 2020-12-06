import React,{useState,useEffect,useRef} from 'react';
import giphy from './gif/giphy.gif';
import Gauge from './Gauge';
import html2canvas from 'html2canvas';
import firebaseService from './firebaseService';
import firebase from "firebase/app";
import Modal from 'react-modal';
import bgHeader from './img/bg-header.png';

import {
    useLocation,
  } from "react-router-dom";

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root');

const Resultat = (props) => {

  const photoRef = useRef(null);
  const outputRef = useRef(null);
    useEffect(() => {
      console.log("???????????????????????????? in use effect");
         function decompte() {
            let i = 0;
            if (i == 0) {
                i = 1;
               // var elem = document.getElementById("myBar");
                var width = 1;
                var id = setInterval(frame, 100);
                function frame() {
                  if (width >= 100) {
                    SetShowResult(true);
                    setCounting(false);
                  //  clearInterval(id);
                  //  i = 0;
                  } else {
                    width++;
                    SetProgress(width);
                   // elem.style.width = width + "%";
                  }
                }
              }
        }

        decompte();
      }, [])
/*    
// Create a root reference
var storageRef = firebase.storage().ref();
// Data URL string
var message = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'data_url').then(function(snapshot) {
  console.log('Uploaded a data_url string!');
});*/

    let location = useLocation();

    const [showResult, SetShowResult] = useState(false);
    const [progress, SetProgress] = useState(0);
    const [counting, setCounting] = useState(true);   //useState(location.state.couting);
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);
    const [ imgSrc, setImgSrc] = useState('');

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

const  takeshot =() => { 
  // Use the html2canvas 
  // function to take a screenshot 
  // and append it 
  //canvasRef.current.getContext('2d')

  // to the output div 
  const  id =  guid();
  html2canvas(photoRef.current).then( 
      function (canvas) { 
        let image = new Image();
        image.src = canvas.toDataURL();
        setImgSrc(image.src);
        const imageRef = firebaseService.storage().ref('images').child(id)
         imageRef.putString(image.src, 'data_url').then(function(snapshot) {
         // console.log('Uploaded a data_url string!',snapshot);
        //  console.log('name',imageRef.name);
        //  console.log('fullpath.... ','https://firebasestorage.googleapis.com/v0/b/mindmetrics.appspot.com/o/'+imageRef.fullPath);

      }).then(() => imageRef.getDownloadURL())
      .then(url =>{
        console.log('Finally getting the URL...',url);
      })
      }) 
}

   /*setTimeout(() =>{ SetShowResult(true);
     move();
    }, 3000);
    */
   if (!showResult) 
   {
       return (
         <div style={{backgroundImage: `url(${bgHeader})`,flex:1,display:'flex'}}>
            <label style={{color:'red'}}>  background  {background}</label>
            <label style={{color:'red'}}>???   {resultat1level}</label>
            <label style={{color:'red'}}>!!!! {resultat3level}</label>
            <label style={{color:'red'}}> ......{resultat4level}</label>

          <div  style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center', margin:'25%'
        }}>
             <Gauge fontSize="34" fontColor='#86207C' level ={progress} title="Score Calculation" color="orange"/>
        </div>
         </div>
        
   );}
  /*
  
        <div style={{ alignItems:'center',width:'100%'}}>
          <Gauge level ={resultat1.level} title= {resultat1.title} color={resultat1.color}/>
          <Gauge level ={resultat2.level} title= {resultat2.title} color={resultat2.color}/>
          <Gauge level ={resultat3.level} title= {resultat3.title} color={resultat3.color}/>
          <Gauge level ={resultat4.level} title= {resultat4.title} color={resultat4.color}/>
          <Gauge level ={resultat5.level} title= {resultat5.title} color={resultat5.color}/>
        </div>
  */
   return (
      <div>
        <label>{resultat1level}</label>
      <button onClick={() => {
         const imageRef = firebaseService.storage().ref('images').child(guid())
         
        // imageRef.put(blob, { contentType: mime })
        // then imageRef.getDownloadURL() 

        var storageRef = firebase.storage().ref();
        var imagesRef = storageRef.child('images/');
        // Data URL string
        var message = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
        imageRef.putString(message, 'data_url').then(function(snapshot) {
          console.log('Uploaded a data_url string!',snapshot);
          console.log('url',imageRef.getDownloadURL())
      })
    }}> 
            upload data....  
        </button> 

    <div id="photo" ref={photoRef} > 
    <h1>GeeksforGeeks</h1> 
        <label>
        Hello everyone! This is a 
        trial page for taking a 
        screenshot. 
        This is a dummy button! 
        </label>
        <button> Dummy</button>  
        <label>Click the button below to 
        take a screenshot of the div.
        </label>
        <button onClick={() =>takeshot()}> 
            Take Screenshot 
        </button> 
    </div> 
    <h1>Screenshot:</h1> 
    <div id="output" ref={outputRef}></div> 

          <h1 style={{padding:10,maxHeight:'100%',maxWidth:'100%',display:'flex'}}>{JSON.stringify(items)} </h1>
          <img  style={{padding:10,maxHeight:'100%',maxWidth:'100%'}} src={imgSrc} alt="giphy"/>
      </div>
    );
  };

  export default Resultat;