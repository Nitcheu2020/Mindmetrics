import React,{useState,useEffect} from 'react';
import giphy from './gif/giphy.gif';
import Gauge from './Gauge';

import {
    useLocation,
  } from "react-router-dom";

const Resultat = (props) => {

  
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
    
        decompte()
      }, [])
    


    let location = useLocation();

    const [showResult, SetShowResult] = useState(false);
    const [progress, SetProgress] = useState(0);
    const [counting, setCounting] = useState(true); //useState(location.state.couting);

let background = location.state && location.state.progress;

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
          <h1>Hellooooo </h1>
          <img  style={{padding:10,}} src={giphy} alt="giphy"/>
      </div>
    );
  };

  export default Resultat;