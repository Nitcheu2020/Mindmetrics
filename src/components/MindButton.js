import React,{useState} from 'react';
 
  const MindButton = (props) => {
    const [styler,setStyler] = useState('#F49608');
    return (
    <button style={{
        position:'relative',
         color:'white',
         'backgroundColor':styler,
         'borderRadius':50,
         paddingTop: 18,
         paddingBottom: 15,
         paddingRight:props.paddingHorizontal?props.paddingHorizontal:56,
         paddingLeft:props.paddingHorizontal?props.paddingHorizontal:56,
         borderColor:'transparent',
         fontFamily:'Open Sans Light',
         fontSize:props.textSize,
         marginBottom: props.marginBottom,
         marginTop:props.marginTop,
         cursor: 'pointer'
       }} 
       onMouseEnter= {() => setStyler('red')}
       onMouseLeave={() => setStyler('#F49608')}
       onClick={props.func?props.func: console.log('button' + props.text + 'clicked')}
    >
        {props.text}
    </button>
    );
  };

  export default MindButton;