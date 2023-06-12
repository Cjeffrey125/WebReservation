import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../heading/header.css";
import images from '../../constant/images';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navList">
          <li className="logo">
            <Link to="/" className="navLink">Explore</Link>
          </li>

          <div className="searchContainer">
            <input type="text" placeholder="Search" className="searchInput" />
            <button className="searchButton"><img src={images.searcIcon} alt="Search Icon" /></button>
          </div>

          <li className="navItem">
            <Link to="/blog1" className="navLink">Blog</Link>
          </li>
          <li className="navItem">
            <Link to="/events" className="navLink">Event</Link>
          </li>
          <li className="navItem">
            <Link to="/events" className="navLink">Tickets</Link>
          </li>
          <li className="navItem">
            <Link to="/blogs" className="navLink">Contact Us</Link>
          </li>

          <li className="loginContainer">
            <Link to="/blogs" className="navLink"><img src={images.LoginIcon} alt="Login Icon" /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
