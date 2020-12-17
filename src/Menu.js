import React from 'react';
import TextKey from './text/TextKey';
import {
    Link
  } from "react-router-dom";

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
  const container = { 
    flex:1,
    display: 'flex',
    flexDirection:'row',
    justifyContent:props.justifyContent,
    alignItems:'flex-end',
    alignSelf:'center',
  };

  return (
    <nav style={container}>
      <Link to="/" style={styleMenu}>
        {TextKey.menu.home}</Link>
      <Link to="/description" style={styleMenu}>
        {TextKey.menu.hwItW}
      </Link>
      <Link to="/contact" style={styleMenu}>
        {TextKey.menu.contact}
      </Link>
    </nav>
  );
}
export default Menu;