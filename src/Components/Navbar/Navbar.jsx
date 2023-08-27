import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container-fluid d-flex">
        <div className="logo">
            Foody
        </div>

        <button
          className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars Toggle_icon"></i>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-evenly ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/About"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Menu"
                onClick={toggleMenu}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Events"
                onClick={toggleMenu}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Contact"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="btn_Container">
            <Link to="/Reservation">
              <button
                className="btn rounded-pill"
                id="Btn-orange"
                type="button"
              >
                Book a table
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
