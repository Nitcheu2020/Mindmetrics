import React,{useState,useEffect,useRef} from 'react';
import giphy from './gif/giphy.gif';
import Gauge from './Gauge';
import html2canvas from 'html2canvas';
import firebaseService from './firebaseService';
import firebase from "firebase/app";
import Modal from 'react-modal';
import bgHeader from './img/bg-header.png';
import Blog from './Blog';

import Footer from './Footer';
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

function  takeshot () { 
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
       /* const imageRef = firebaseService.storage().ref('images').child(guid())
        var storageRef = firebase.storage().ref();
        var imagesRef = storageRef.child('images/');
        // Data URL string
         imageRef.putString(url, 'data_url').then(function(snapshot) {
          console.log('Uploaded a data_url string!',snapshot);
         // console.log('url',imageRef.getDownloadURL())
      }) */
        console.log('Finally getting the URL...',url);
        setUrl(url);
      })
      }) 
}

        decompte();
        takeshot ();
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
    //save upgrade and save the result image in the storage.. or database .... 
//console.log("location.....",location.pathname);
    const [showResult, SetShowResult] = useState(false);
    const [progress, SetProgress] = useState(0);
    const [counting, setCounting] = useState(true);   //useState(location.state.couting);
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);
    const [ imgSrc, setImgSrc] = useState(null);
    const [ url, setUrl] = useState(null);

let background = location.state && location.state.progress;

  
//BLOG props as url...
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


   /*setTimeout(() =>{ SetShowResult(true);
     move();
    }, 3000);
    */

   return (
     <div style={{
      paddingTop:heightScreen(74),backgroundColor:'#d3d3d3'}} ref={photoRef} >
      <div style={{display:'flex',flexDirection:'row',backgroundColor:'#d3d3d3',justifyContent:'space-between',
          paddingLeft: widthScreen(360), paddingRight: widthScreen(360)
      }} >
        <div  style={{width:'25.7vw', paddingTop: heightScreen(8)}}> 
          <nav style={{fontSize:widthScreen(35),paddingBottom:heightScreen(33), borderBottom: '2px solid 	#c0c0c0',width:'100%',marginBottom:heightScreen(33),
          fontFamily:'Open Sans Bold',
        }}>
              Your Name 
          </nav>
          
          <nav>
            <label style={{fontSize:widthScreen(26),fontFamily:'Open Sans Italic'}}>You are :</label> 
            </nav>
            <label style={{fontSize:widthScreen(38),fontFamily:'Open Sans Italic',paddingBottom:heightScreen(29)}}>Helpful and Analytical</label> 
            <nav style={{width:'25.7vw',display:'flex',paddingRight:'5vw'}}>
              <label style={{ borderBottom: '2px solid 	#c0c0c0',paddingBottom:'1vw',fontSize:widthScreen(22),fontFamily:'Open Sans Light'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                {<br/>} {<br/>}
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                {<br/>} {<br/>}
                Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint non proident.
              </label>
            </nav>
            <div style={{paddingTop:heightScreen(40),flexDirection:'row',display:'flex',justifyContent:'flex-start', alignItems:'center',}}>
              <label style={{display:'flex',fontSize:'1vw',paddingRight:'0.5vw',marginTop:-18,fontFamily:'Sans Open Bold'}}>
                Share Your Results 
              </label>
              {url? <Blog url={url}/>:null}
            </div>
        </div>

        <div 
          style={{
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
          }}
        > 
                  <Gauge level ={50} title="betterthan" color="#ff0f33"/>
                  <Gauge level ={80} title="betterthan1" color="#41ac97"/>
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
        <img   src={bgHeader} style={{
          width: '100%',
          height: 'auto',
        }} alt="bgHeader"/>

        <div style={{
         // border: '5px solid 	#red',
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
         position: 'absolute',
        }}>

        <button className="btn" 
          onClick={() => console.log("Cliqued")}
          onMouseOver={() => console.log("hover")}
          style={{

           
            display:'flex',
    alignSelf:'center',
    color:'white',
    'backgroundColor':'#F49608',
    'borderRadius':20,
    padding: 7,
    marginTop:5,
    marginBottom:15,
    borderColor:'transparent',
    fontFamily:'Sans Open Light',
    fontSize:21,
           /*top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)',
           '-ms-transform': 'translate(-50%, -50%)',
           backgroundColor: '#555',
           color: 'white',
           fontSize: '16px',
           padding: '12px 24px',
           border: 'none',
           cursor: 'pointer',
           borderRadius: '5px',
           textAlign: 'center',*/ 
          }}

        >
          GET PREMIUM REPORTS
        </button>

        </div>

      </div>
      <Footer text={true} url={url}/>
    </div> 

    );
  };

  export default Resultat;