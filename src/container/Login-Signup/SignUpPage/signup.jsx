import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import images from '../../../constant/images';
import "./signup.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input className="signup-input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="     Enter your first name"
            />
          </div>
          <div>
            <input className="signup-input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="     Enter your last name"
            />
          </div>
          <div>
            <input className="signup-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="     Enter your email"
            />
          </div>
          <div>
            <input className="signup-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="     Enter your password"
            />
          </div>
          <div>
            <input className="signup-input"
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              placeholder="     Retype your password"
            />
          </div>

          <button className ="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
      <img className="signIn-image" src={images.signup} alt="SignUp Image" />
      <div className="policy">
        <p>By using this service, you understood and agree to the VibeOut’s<br></br>
        Terms of Use and Privacy Policy.</p>
      </div>
    </div>
  );
};

export default SignUp;
