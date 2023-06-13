import React, { useState } from "react";
import images from '../../constant/images';
import '../ContactUs/contactUs.css';

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container">
    <div className="form-container">
    <h1>Contact Us</h1>
      <p>We are here for you. How can we help?</p>
      <form onSubmit={handleSubmit}>

        <div className="form-info">
        <input className="contact-input"
          type="text"
          value={firstName}
          placeholder="Firstname"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        </div>

        <div className="form-info">
        <input className="contact-input"
          type="text"
          value={lastName}
          placeholder="Lastname"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        </div>


        <div className="form-info">
        <input className="contact-input"
          type="tel"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        </div>

        <div className="form-info">
        <input className="contact-input"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className="form-inquiry">
        <textarea className="contact-message"
          value={message}
          placeholder="Please Input your Query."
          onChange={(e) => setMessage(e.target.value)}
          required
        >
        </textarea>
        </div>

        <button className="contact-button" type="submit">Submit</button>
      </form>
      </div>

      <div className="details-container">
      <div className="details-content">
      <img className="contact-image" src={images.contacticon} alt="Contact Image" />
      <h1>Get in Touch with Us</h1>
        <p>Email: example@example.com</p>
        <p>Contact Number: 123-456-7890</p>
        <p>Address: 123 Street, City, Country</p>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
