import React from "react";
import "./LandingPage.css";
import images from '../../constant/images';

const LandingPage = () => {
    return (
        <div className="container">
          <img src={images.frontimage} alt="Image" />
          <h1 className="headertext">Experience the Thrill @ Binan</h1>
          <button className="button">Browse Event</button>
        </div>
      );
};

export default LandingPage;
