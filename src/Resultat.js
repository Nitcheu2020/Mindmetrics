import React,{useState,useEffect,useRef} from 'react';
import giphy from './gif/giphy.gif';
import Gauge from './Gauge';
import html2canvas from 'html2canvas';
import firebaseService from './firebaseService';
import firebase from "firebase/app";

import {
    useLocation,
  } from "react-router-dom";

const Resultat = (props) => {

  const photoRef = useRef(null);
  const outputRef = useRef(null);
    useEffect(() => {
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
        <div >
             <Gauge level ={progress} title="loading" color="orange"/>
        </div>
   );}
    return (
      <div>

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