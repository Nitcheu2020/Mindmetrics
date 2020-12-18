import React,{useState} from 'react';

const widthScreen = (taille) =>  {
    return taille * 100/2063 + 'vw';
  }
  const heightScreen = (taille) =>  {
    return taille * 100/2610 + 'vw';
  } 
  const  fontSize = widthScreen(19);

  const MindButton = (props) => {
    const [styler,setStyler] = useState('#F49608');
    return (
    <button style={{
        position:'relative',
         color:'white',
         'backgroundColor':styler,
         'borderRadius':widthScreen(50),
         paddingTop: heightScreen(18),
         paddingBottom: heightScreen(15),
         paddingRight:widthScreen(props.paddingHorizontal?props.paddingHorizontal:56),
         paddingLeft:widthScreen(props.paddingHorizontal?props.paddingHorizontal:56),
         borderColor:'transparent',
         fontFamily:'Open Sans Light',
         fontSize:props.textSize,
         marginBottom: props.marginBottom,
         marginTop:props.marginTop,
         cursor: 'pointer'
       }} 
       onMouseEnter= {() => setStyler('red')}
       onClick={props.func?props.func: console.log('button' + props.text + 'clicked')}
    >
        {props.text}
    </button>
    );
  };

  export default MindButton;