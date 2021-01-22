import React, { useState } from 'react';
import './mediaQuery.css';
import logo from './img/logo.png';
import MindButton from './components/MindButton';
import main from './img/main.png';
import TextKey from './text/TextKey';
import {Link} from 'react-router-dom';
import Menu from './Menu';
/*
.col- (extra small devices - screen width less than 576px)
.col-sm- (small devices - screen width equal to or greater than 576px)
.col-md- (medium devices - screen width equal to or greater than 768px)
.col-lg- (large devices - screen width equal to or greater than 992px)
.col-xl- (xlarge devices - screen width equal to or greater than 1200px)
*/
const widthScreen = (taille) =>  {
    return taille * 100/2063 + 'vw';
  }
  const heightScreen = (taille) =>  {
    return taille * 100/2610 + 'vw';
  } 

const MediaQuery = () =>{
    const [openMenu,setOpenMenu] = useState(false);
    const tesFunc = () =>console.log("Hello");
    return (
        <body > 
            <Menu/>
<div class="header">
    <div class="row" style= {{display:'flex',alignItems:'center',justifyContent:'center'}}>
    {openMenu?    
    <div class="col-3 col-5 col-s-3 menu" onClick={() =>setOpenMenu(!openMenu)}>
         <Menu/>
    </div>:null}

    {!openMenu?<h1 id="my-content"  class="col-5" onClick={() =>setOpenMenu(!openMenu)}>Chania</h1>: null}
    <img class="col-2" src= {logo} alt="Girl in a jacket"/>
    <div class="col-5" style={{display:'flex',justifyContent:'flex-end'}}>
        <MindButton paddingHorizontal={30}func={tesFunc} textSize={20.5}    text={"TAKE TEST"} />
    </div>
  </div>
</div>

<div class="row" style={{display:'table',justifyContent:'space-around',backgroundColor:'#d3d3d3'}}  id="test">
    <div class="col-6 col-s-9">
        <img
            style={{display: 'flex',maxWidth: widthScreen(503), maxHeight: 'auto',}}
            
            src={main} alt="hand"
            />
    </div>
    <nav class="row">
            
        <label class="col" >
            <label class="row col-s-3" style={{fontFamily:'Open Sans Bold',fontSize:40,paddingBottom:10}}>{TextKey.home.easyToUse}</label>
            <label class="row col-s-3" style={{fontFamily:'Open Sans Light',marginRight:'10%',fontSize:22}} > {TextKey.home.faster}</label>
            <Link class="row col-s-3"to="/description" transition="glide-right" style={{ textDecoration: 'none',}}>
                <label class="row-3 row-s-3" style={{color:'#ba097d',fontFamily:'Open Sans Light'}}> {TextKey.home.tryOut} &gt; </label>
            </Link>
        </label>
    </nav>
<div>
    <div class="aside">
        
      <h2>Where?</h2>
      <p>Crete is a Greek island in the Mediterranean Sea.</p>
      <h2>How?</h2>
      <p>You can reach Chania airport from all over Europe.</p>
    </div>
    <div id="my-content"> ???????????????</div>
  </div>
</div>

<div class="footer">
<img
       src={main} alt="hand"
    />
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>

</body>
    )
}
export default MediaQuery;
