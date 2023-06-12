import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import images from '../../constant/images';
import "../EventPage/event.css";

const EventPage = () => {
  return (
    <div className="container">
    <h1 className="headertext1">Featured Events</h1>

      <div className="Events">
        <div className="imageRow">
          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_1} alt="Image" />
              <h3 className="headerinfo">Sining Konsyerto</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>


          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_2} alt="Image" />
              <h3 className="headerinfo">House 4 Rent</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>

          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_3} alt="Image" />
              <h3 className="headerinfo">Dulam Dulayan</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>

          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_4} alt="Image" />
              <h3 className="headerinfo">Bingo</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>  
          </div>

          <div className="imageRow">
          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_4} alt="Image" />
              <h3 className="headerinfo">Bingo</h3>
              <p>18 May | 12:30 AM</p>
            </div>
            </Link>
            
            <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_3} alt="Image" />
              <h3 className="headerinfo">Dulam Dulayan</h3>
              <p>18 May | 12:30 AM</p>
            </div>
            </Link>

            <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_2} alt="Image" />
              <h3 className="headerinfo">House 4 Rent</h3>
              <p>18 May | 12:30 AM</p>
            </div>
            </Link>

            <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_1} alt="Image" />
              <h3 className="headerinfo">Sining Konsyerto</h3>
              <p>18 May | 12:30 AM</p>
            </div>
            </Link>

        </div>

    <h1 className="headertext2"> Upcoming Events</h1>

    <div className="Events">
        <div className="imageRow">
          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_1} alt="Image" />
              <h3 className="headerinfo">Sining Konsyerto</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>


          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_2} alt="Image" />
              <h3 className="headerinfo">House 4 Rent</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>

          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_3} alt="Image" />
              <h3 className="headerinfo">Dulam Dulayan</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>

          <Link to="/blog1" className="Event">
            <div className="imageContainer">
              <img src={images.event_4} alt="Image" />
              <h3 className="headerinfo">Bingo</h3>
              <p>18 May | 12:30 AM</p>
            </div>
          </Link>  
          </div>  
        </div>
       
      </div>
    </div>
  );
};

export default EventPage;
