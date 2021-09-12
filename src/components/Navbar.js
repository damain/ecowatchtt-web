import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo1.webp";
import Menu from "./Menu";
import SocialLinks from "./SocialLinks";

const Navbar = ({ path }) => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("initialState");

  const toggleHamburger = () => {
    setActive(!active);
    setNavBarActiveClass(active ? "" : "is-active");
  };

  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="nav-left">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="EcoWatchTT" className="logo" style={{ width: "215px" }} />
            </Link>
          </div>
          <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
            <Menu path={path} />
          </div>
        </div>
        <div className="nav-right">
          <div className="social-area">
            <SocialLinks />
          </div>
          <div>
            <div className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input type="text" className="search-input" />
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hamburger"
            onClick={toggleHamburger}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          {/* Side menu */}
          <div className={`side-menu ${active ? "active" : ""}`}>
            <Menu path={path}/>
            <div className="social-area">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
