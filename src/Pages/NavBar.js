import React from "react";
import "./NavBar.scss";
import DDImage from "./DDLogo.png";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <button className="logo">
        <Link to="/" or>
          <img src={DDImage} alt="Logo" />
        </Link>
      </button>
      <div className="navButtons">
        <button className="navButton">
          <Link to="/membersgallery">Members Gallery</Link>
        </button>
        <button className="navButton">
          <Link to="/aboutus">About Us</Link>
        </button>
        <button className="navButton">
          <Link to="/contact">Contact</Link>
        </button>
        <button className="navButton">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};
