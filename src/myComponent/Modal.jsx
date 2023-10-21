import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import './modal.css';

function Modal({closeModal}) {
  return (
    <div className='modalBackgorund'>
        <div className="modalContainer">
            <button onClick={()=>closeModal(false)} className='btnCancel'>X</button>
            <div className="title">
                <BsFillPatchCheckFill className='logo' />
            </div>
            <div className="body">
                <h2>Registration Successful!</h2>
            </div>
            <div className="footer">
                <button className='btnOK' onClick={()=>closeModal(false)} >OK</button>
            </div>
        </div>
    </div>
  )
}

export default Modal