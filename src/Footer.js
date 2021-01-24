
import React from "react";
  import social_icons from './img/social_icons.png';
import logo_footer from './img/logo_footer.png';
import imgbackground from './img/imgbackground.png';

import Menu from './Menu';
import Blog from './Blog';
import TextKey from './text/TextKey';

const  Footer =(props)=>{
    return (
        <div  id="footer" style={{maxWidth:'100%',backgroundColor:'white', backgroundImage: `url(${imgbackground})`}}>
          {props.text?<div style={{backgroundColor:'#CDCDCD',justifyContent:'center',display:'flex',padding:'2%',alignSelf:'flex-end',flexDirection:'column',
            maringBottom:60
          }}>
              <label  style={{alignSelf:'center',textAlign:'center',fontSize:38,fontFamily:'Open Sans Light',paddingBottom:36}}>{TextKey.footer.ask}</label>
                <div style={{alignSelf:'center'}}> 
                  <Blog url={props.url}/>
                </div>
              </div>:null
          }
          <div id="footerItem" style={{
              display: 'flex',
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              paddingBottom:39,
              paddingTop:60,
             // backgroundColor:'red'
            //  maxWidth:'100%',
            }}
          >
              <div   class="col-3 col-5 col-s-3 menuFooter"  style={{display:'flex',alignSelf:'flex-start',alignItems:'flex-start',justifyContent:'flex-start',}}>
                <Menu/>
              </div>
              <div id="socialIcon" style={{display:'flex',marginTop:-25}}>
                <img
                    src={social_icons} alt="social_icons" 
                  />
              </div>
              
          </div>
  
          <div  
            id="footerItem" 
              style={{ 
              display: 'flex',
              justifyContent:'center',
              alignItems:'center',
              paddingBottom:'1%',
            }}
          >
            <nav style={{
                flex:1,
                //'fontWeight': 'bold',
                display: 'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                alignSelf:'flex-start',
                
                //display:'inline-flex',
              }}>
              <label 
                style={{
                    background: '#fff',
                    border: '1px solid #CDC',
                    borderRadius:'50%',
                    padding: 1,
                    color:'#CDC'
                }}
              >
                   R
              </label>
              <label style={{display:'flex',padding:1,color:'#CDC'}}>{TextKey.footer.right}</label>
            </nav>
            <img
              id="logoFooter"
              style={{display: 'flex',transform: [{ rotate: '14deg' }]}}
              src={logo_footer} alt="logo_footer" 
            />
          </div>
        </div>
    );
  }
  export default Footer;    