import React from "react";
import images from '../../constant/images';
import "../blogs/blog.css";

const blog3 = () => {
  return (
    <div className="container">
        <button className="button">Check on Event</button>
        
    <div className="infoBox">
    <div className="articleInfo">
        <h1 className="articleTitle">Experience the Thrill of Live Music:<br></br>
        Join Us for the BCHATO Music Fest!</h1>

        <p className="dateText">June 24, 2023 | Event by BCSPA </p> 
        </div>
        </div>

    <div className="articleImage">
            <img src={images.blogimage_3} alt="Image" />
        </div>

    <div className="contentBox">
    <div className="content">
        <p>Get ready for a night of pure musical bliss at the BCHATO Music Festival! This electrifying event is set to ignite your senses and take you on a euphoric journey through the power of music.
           Prepare to be swept off your feet as renowned artists and emerging talents grace the stage, delivering breathtaking performances that will leave you in awe. From heart-pounding beats to soul-stirring melodies, the BCHATO Music Festival promises an unforgettable lineup that caters to a diverse range of musical tastes.
           Immerse yourself in a vibrant atmosphere where the energy is palpable and the excitement is.
           </p>
        </div>
        </div>
    </div>
  );
};

export default blog3;
