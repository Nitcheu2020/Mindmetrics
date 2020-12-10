import React from 'react';
import {
    Link
  } from "react-router-dom";

var fontSize = '1.25vw';
const styleMenu = { 
    textDecoration: 'none',
    padding:'1%',
    display:'flex',
    fontSize:fontSize
};

/*

            <Link to="/description" style={styleMenu}>HOW IT WORKS</Link>
            <Link to="/blog" style={styleMenu}>Blog</Link>
            <Link to="/research" style={styleMenu} >RESEARCH</Link>
            <Link to="/contact" style={styleMenu}>CONTACT</Link>
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
            <Link to="/blog" style={styleMenu}>Blog</Link>
            <Link to="/research" style={styleMenu} >RESEARCH</Link>
            <Link to="/contact" style={styleMenu}>CONTACT</Link>
          </nav>
    );
}
export default Menu;