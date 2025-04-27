import React, { useRef, useEffect } from 'react';
import "../pages/style/RegisterModal.scss";
import { Link } from 'react-router-dom';
import google from '../assets/svg/google.svg';
import fase from '../assets/svg/fase.svg';

const RegisterModal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        console.log("Clicked outside modal");
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className='loginmodal'>
      <div className="log-mod" ref={modalRef}>
        <div className="top-modal">
          <button className="modal-close" onClick={onClose}>×</button>
          <div className="logreg">
            <Link className='hov' to={'/loginmodal'}>
            <p>Login</p>
            </Link>
            <h5>|</h5>
            <Link to={'/registermodal'}>
            <span>Register</span>
            </Link>
          </div>
          <div className="lorem">
            <p>Enter your username and password to login.</p>
          </div>
        </div>

        <div className="mid-modal">
          <input className='email' type="text" placeholder= 'email@example.com' />
          <input className='password' type="password"  />
          <Link to="/forgotpassword">Forgot Password?</Link>
          <button className='login-btn'>Login</button>
        </div>

        <div className="bottom-modal">
          <div className="line"></div>
          <p>Or login with</p>
          <div className="line"></div>
        </div>

        <div className="btm-input">
          <button className='google'><img src={google} alt="" /> <p>Login with Google</p></button>
          <button className='fase'><img src={fase} alt="" /> <p>Login with Facebook</p></button>
        </div>

        <div className="btm-line"></div>
      </div>
    </div>
  );
};

export default RegisterModal;
