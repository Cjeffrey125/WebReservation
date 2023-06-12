import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import images from '../../constant/images';
import "./LandingPage.css";

const LandingPage = () => {
  return (

    <div className="container">
      <img src={images.frontimage} alt="Image" />
      <h1 className="headerText">Experience the Thrill @ Binan</h1>
      <Link to ="/events">
      <button className="lpbutton">Browse Event</button>
      </Link>

      <div className="frontArticles">
        <div className="imageRow">
          <div className="frontArticle">
            <img src={images.blogimage_1} alt="Image" />
            <p className="dateText">June 21, 2023</p>
            <h3 className="articleHeader">Get Ready to Dance the Night Away at the BCHato Music Festival!</h3>
            <p>Prepare yourself for the biggest and exciting event of the year, Get Ready to Dance </p>
            <Link to="/blog1">Read More...</Link>
          </div>

          <div className="frontArticle">
            <img src={images.blogimage_2} alt="Image" />
            <p className="dateText">March 20, 2023</p>
            <h3 className="articleHeader">Experience the Rhythm and Energy of BCHato's International Music Showcase!</h3>
            <p>Prepare yourself for the biggest and exciting event of the year, Get Ready to Dance </p>
            <Link to="/blog2">Read More...</Link>
          </div>
          
          <div className="frontArticle">
            <img src={images.blogimage_3} alt="Image" />
            <p className="dateText">June 24, 2023</p>
            <h3 className="articleHeader">Experience the Thrill of Live Music: Join Us for the BCHATO Music Fest!.</h3>
            <p>Prepare yourself for the biggest and exciting event of the year, Get Ready to Dance </p>
            <Link to="/blog3">Read More...</Link>
          </div>
        </div>

        <div className="imageRow">
          <div className="frontArticle">  
            <img src={images.blogimage_4} alt="Image" />
            <p className="dateText">June 21, 2023</p>
            <h3 className="articleHeader">Get Ready to Dance the Night Away at the BCHato Music Festival!</h3>
            <p>Prepare yourself for the biggest and exciting event of the year, Get Ready to Dance </p>
            <Link to="/blog4">Read More...</Link>
          </div>
          <div className="frontArticle">
            <img src={images.blogimage_5} alt="Image" />
            <p className="dateText">March 20, 2023</p>
            <h3 className="articleHeader">Experience the Rhythm and Energy of BCHato's International Music Showcase!</h3>
            <p>Prepare yourself for the biggest and exciting event of the year, Get Ready to Dance </p>
            <Link to="/blog5">Read More...</Link>
          </div>
          <div className="frontArticle">
            <img src={images.blogimage_6} alt="Image" />
            <p className="dateText">June 24, 2023</p>
            <h3 className="articleHeader">Experience the Thrill of Live Music: Join Us for the BCHATO Music Fest!</h3>
            <p>Prepare yourself for the biggest and exciting event of the year, Get Ready to Dance </p>
            <Link to="/blog6">Read More...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
