import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import images from '../../../constant/images';
import '../welcome/welcome.css'

const Welcome = () => {
   return (
      <div className="container">
        <div className="access-form">
        <img className="ticket-icon" src={images.ticketicon} alt="Ticket Icon" />
          <h1 className="welcome">Welcome</h1>
          <p className="welcome">Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.<br />
          Nullam lacinia sapien </p>
         
          <Link to="/login">
            <button className="welcome-button">Login</button>
          </Link>

          <Link to="/signup">
            <button className="welcome-button">Sign In</button>
          </Link> 
        </div>
        <div className="image-container">
          <img className="welcome-image" src={images.login} alt="Welcome Image" />
          
        </div>
      </div>
   );
}

export default Welcome;
