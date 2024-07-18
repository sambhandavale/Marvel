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
          <Link to="#" className="extra_item sign_up">
            SIGNUP
          </Link>
          <Link to="#" className="extra_item login">
            LOGIN
          </Link>
          <Link to="#" className="extra_item">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <g clipPath="url(#clip0_107_136)">
                <path
                  d="M12.6 22.0999C17.9019 22.0999 22.2 17.8018 22.2 12.4999C22.2 7.19797 17.9019 2.8999 12.6 2.8999C7.29807 2.8999 3 7.19797 3 12.4999C3 17.8018 7.29807 22.0999 12.6 22.0999Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M19.3379 19.8374L27.3005 27.8"
                  stroke="white"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_107_136">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg> */}
            <img src="/icons/navbar/search.svg" alt="search_bar" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
