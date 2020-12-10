import React from 'react';

const  Gauge = (props) => {
    return (
        <div>
        <label style={{fontFamily:'Sans Open Light',alignSelf:'center',display:'flex'}}>{props.title}</label>
        <label style={{fontFamily:'Sans Open Light'}}>{props.description} s'aksdapodiad'askmasdnkasoidna d;aoskdnas</label>
        <div style={{justifyContent:'center',alignItems:'center',flexDirection:'row',display:'flex',flex:1,alignSelf:'center',marginTop:'1vh'}}>
            
            <div style={{backgroundColor:'#DCDCDC',borderRadius:5,marginLeft:10,display:'flex',flex:1,marginRight:10}}>
                <div style={{height:15,width:props.level +"%",backgroundColor:props.color,borderRadius:6,display:'flex'}}/>
            </div>
            <label style={{display:'flex', padding:5,fontFamily:'Sans Open Light',fontSize:props.fontSize?props.fontSize :null,
            color:props.fontColor?props.fontColor:null}}>{props.level? props.level.toFixed(2): props.level }%</label>
        </div>
        </div>
    );
}
export default Gauge;