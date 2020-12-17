import React from 'react';
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
      <Link to="/" style={styleMenu}>HOME</Link>
      <Link to="/description" style={styleMenu}>HOW IT WORKS</Link>
      <Link to="/contact" style={styleMenu}>CONTACT</Link>
    </nav>
  );
}
export default Menu;