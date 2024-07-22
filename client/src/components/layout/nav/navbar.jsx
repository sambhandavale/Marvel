import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => { 
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="item">
          <div className="card1">
            <div className="flip-box1">
              <div className="front1">
                <img
                  className="front_logo"
                  src="/assets/components/navbar/logo_front.png"
                  alt=""
                />
              </div>
              <div className="back1">
                <img
                  className="back_logo"
                  src="/assets/components/navbar/logo_back.png"
                  alt="Back Logo"
                />
              </div>
            </div>
          </div>
        </Link>
        <div className="middle_nav">
          <Link to="/" className="items">
            HOME
          </Link>
          <Link to="/movies" className="items">
            MOVIES
          </Link>
          <Link to="/series" className="items">
            SERIES
          </Link>
          <Link to="#" className="items">
            CHARACTORS
          </Link>
        </div>
        <div className="extra_nav">
          <Link to="/signup" className="extra_item">
            SIGNUP
          </Link>
          <Link to="/login" className="extra_item">
            LOGIN
          </Link>
          <Link to="#" className="extra_item">
            <img src="/icons/navbar/search.svg" alt="search_bar" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
