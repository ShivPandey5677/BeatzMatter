import React, { useState } from 'react';
import './Login.css'; 
import { FaLock } from "react-icons/fa";
import { IoClose,IoMail,IoPerson } from "react-icons/io5";

const Login  = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <div>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button className="bthLogin-popup" onClick={() => setIsPopupActive(true)}>Login</button>
        </nav>
      </header>
      <div className={`wrapper ${isPopupActive ? 'active-popup' : ''} ${isActive ? 'active' : ''}`}>
        <span className="icon-close" onClick={() => setIsPopupActive(false)}>
        <IoClose />
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
              <IoMail /> 
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
              <FaLock />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" required />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="bth">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account? <a href="#" className="register-link">Register</a>
              </p>
            </div>
          </form>
        </div>


        <div className="form-box register">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
              <IoPerson />
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
              <IoMail />
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
              <FaLock />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" required />
                I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="bth">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account? <a href="#" className="login-link">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login ;