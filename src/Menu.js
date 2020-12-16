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

/*

            
            <Link to="/blog" style={styleMenu}>Blog</Link>
            <Link to="/research" style={styleMenu} >RESEARCH</Link>
*/
const  Menu = (props) => {
    return (
        <nav style={{
            flex:1,
            //'fontWeight': 'bold',
            display: 'flex',
            flexDirection:'row',
            justifyContent:props.justifyContent,
            alignItems:'flex-end',
            alignSelf:'center',
            //display:'inline-flex',
          }}>
            <Link to="/" style={styleMenu}>HOME</Link>
            <Link to="/description" style={styleMenu}>HOW IT WORKS</Link>
            <Link to="/contact" style={styleMenu}>CONTACT</Link>
          </nav>
    );
}
export default Menu;