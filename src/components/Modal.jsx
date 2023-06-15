import React from 'react'
import App from '../App'

function Modal(props) {
    console.log(props);
    const setModal = props.setModal;
  return (
    <div className='modal'>
        <div className="modal-content">
            <h2>Modal</h2>
            <p>모달 창입니당.</p>
            <button onClick={() => {setModal(false)}}>닫기</button>
        </div>
    </div>
  )
}

export default Modal