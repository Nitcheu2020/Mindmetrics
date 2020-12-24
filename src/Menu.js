import React, { useState } from 'react';
import TextKey from './text/TextKey';
import {
    Link
  } from "react-router-dom";
import ModalAnswers from './ModalAnswers';
  const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}
const  fontSize = widthScreen(19);

const styleMenu = { 
    textDecoration: 'none',
    paddingRight:'2%',
    display:'flex',
    fontSize:fontSize,
    fontFamily: 'Open Sans Light'
};

const  Menu = (props) => {
   
  const [showContact,setShowContact] =useState(false);
  const container = { 
    flex:1,
    display: 'flex',
    flexDirection:'row',
    justifyContent:props.justifyContent,
    alignItems:'flex-end',
    alignSelf:'center',
  };
//{props.showContact? <ModalAnswers/>:null}

function closeModal(){
  setShowContact(false);
}

  return (
    <nav style={container}>
      <Link to="/" style={styleMenu}>
        {TextKey.menu.home}</Link>
      <a href="#hwItW" style={styleMenu}> 
        {TextKey.menu.hwItW}
      </a>
      <label to="/contact" style={styleMenu} onClick={()=> {
        setShowContact(true);
        console.log(showContact);
        }}>
        {TextKey.menu.contact}
      </label>
      {showContact?<ModalAnswers modalOpen={showContact} closeModal={closeModal}/>:null}
    </nav>
  );
}
export default Menu;