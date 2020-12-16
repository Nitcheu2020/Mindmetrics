import React from 'react';

const widthScreen = (taille) =>  {
    return taille * 100/2063 + 'vw';
  }
  const heightScreen = (taille) =>  {
    return taille * 100/2610 + 'vw';
  } 

  const smallFontSize = widthScreen(22);
  const mediumFontSize = widthScreen(24);
  const paddingText = heightScreen(20);

const  Gauge = (props) => {
    return (
        <div style={{alignItems:'center',justifyContent:'center'}}>
        <label style={{fontFamily:'Sans Open Light',alignSelf:'center',display:'flex',fontSize:mediumFontSize,paddingBottom:paddingText,}}>{props.title}</label>
        <label style={{fontFamily:'Sans Open Light',fontSize:smallFontSize,paddingBottom:paddingText}}>{props.description} s'aksdapodiad'askmasdnkasoidna d;aoskdnas</label>
        <div style={{justifyContent:'center',alignItems:'center',flexDirection:'row',display:'flex',flex:1,alignSelf:'center',paddingBottom:heightScreen(30)}}>
            
            <div style={{backgroundColor:'#DCDCDC',borderRadius:5,display:'flex',flex:1,marginRight:widthScreen(33)}}>
                <div style={{height:heightScreen(28.94),width:props.level +"%",backgroundColor:props.color,borderRadius:6,display:'flex'}}/>
            </div>
            <label style={{display:'flex', padding:5,fontFamily:'Sans Open Light',fontSize:props.fontSize?props.fontSize :null,
            color:props.fontColor?props.fontColor:null}}>{props.level? props.level.toFixed(2): props.level }%</label>
        </div>
        </div>
    );
}
export default Gauge;