import axios from 'axios';
import { React, useRef } from 'react';
// import classes from '../Styling/Modal.module.css'
import './Modal.css';

function Modal() {
  // const userotp = useRef();

  // const closeHandler = () => {
  //     props.closeModal();
  // }

  // const modalFormHandler = (e) => {
  //     e.preventDefault();
  //     let userOTP = userotp.current.value;
  //     props.checkOtp(userOTP);
  //     axios.post("https://taxi-app-vicky.herokuapp.com/api/verify",userOTP)
  //     .then((result) =>{
  //         console.log(result);
  //     })
  //     .catch(err=> console.log(err));
  // }

  return (
    <div>
      <div className="backdrop">
        <div className="modal">
          <header className="header">
            <h2>User Verification</h2>
          </header>
          <div className="modal-content">

            {/* <form onSubmit={modalFormHandler}> */}
            <form>
              <input className="modal-inputField" type="password" placeholder="Enter your password" />
              <button className="modal-customBtn" type="submit">Submit</button>
            </form>

          </div>
          <footer className="modal-actions">
            <button className="modal-customBtn">Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
