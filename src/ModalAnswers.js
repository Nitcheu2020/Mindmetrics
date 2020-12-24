
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
 
 

  //const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
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
 console.log("In Modal",modalIsOpen);
  return (
    <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Email:</h2>
      <h3 ref={_subtitle => (subtitle = _subtitle)}>pascal@mindmetrics.io</h3>
      <h3 ref={_subtitle => (subtitle = _subtitle)}>pascal@mindmetrics.io</h3>
      
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Phone:</h2>
      <h3 ref={_subtitle => (subtitle = _subtitle)}>(+1) 415-881-7413</h3>
      <h3 ref={_subtitle => (subtitle = _subtitle)}>(+1) 415-881-7413</h3>
    </Modal>
  </div>
  );
}

export default ModalAnswers;