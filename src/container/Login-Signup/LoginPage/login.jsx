import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import images from '../../../constant/images';
import "./login.css";

const Login = () => {
  const handleLogin = () => {
    // Handle login logic here
  };
  
  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login">Login</h1>
        <div>
          <label className="login-label"></label>
          <input type="email" className="login-input" placeholder="     Email" />
        </div>
        <div>
          <label className="login-label"></label>
          <input type="password" className="login-input" placeholder="      Password" />
        </div>
        <button className="login-button" onClick={handleLogin}>Sign In</button>
        <p className="forgot-password" onClick={handleForgotPassword}>Forgot your Password?</p>
      </div>
      <img className="login-image" src={images.login} alt="Login Image" />
      
      <div className="policy">
        <p>By using this service, you understood and agree to the VibeOut’s<br></br>
        Terms of Use and Privacy Policy.</p>
      </div>
    </div>
  );
};

export default Login;
