
import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Blog from './Blog';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function Research() {
  return <h2>Reesearch </h2>;
}


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const ModalAnswers = props => {
  
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(props.modalOpen);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  /*
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Result Page"
    >
    
    </Modal>
    
  */
 
  return (
    <div style={{display:'flex',flex:1,maxWidth:'100%'}}>
    

      <h2 ref={_subtitle => (subtitle = _subtitle)}>Result Page</h2>
      <button onClick={props.closeModal}>close</button>
      {props.composant}
      <Blog/>
  </div>
  );
}

export default ModalAnswers;