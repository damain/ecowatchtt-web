import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo1.webp";
import Menu from "./Menu";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";
import colors from "./colors";
import Hamburger from "./hamburger";

const Navbar = ({ path }) => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("initialState");

  const toggleHamburger = () => {
    setActive(!active);
    setNavBarActiveClass(active ? "" : "is-active");
  };

  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <Container className="container">
        <div className="nav-left">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="EcoWatchTT" className="logo" style={{ width: "215px" }} />
            </Link>
          </div>
          <NavMenu id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
            <Menu path={path} />
          </NavMenu>
        </div>
        <NavRight className="nav-right">
          <div className="social-area">
            <SocialLinks />
          </div>
          <div>
            <Search className="search">
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
              <input type="text" className="search-input" placeholder="search..."/>
            </Search>
          </div>

          <Hamburger onClick={toggleHamburger} active={active}/>

          {/* <svg
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
          </svg> */}

          {/* Side menu */}
          <div className={`side-menu ${active ? "active" : ""}`}>
            <Menu path={path} />
            <div className="social-area">
              <SocialLinks />
            </div>
          </div>
        </NavRight>
      </Container>
    </nav>
  );
};

export default Navbar;

const Container = styled.div`
  margin: auto;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 4fr 2fr;
  & a {
    text-decoration: none;
  }

  transition: all 0.3s;
  max-width: 80%;

  @media screen and (max-width: 1120px) {
    max-width: 90%;
  }
`;

const NavRight = styled.div`
  justify-self: right;
  text-align: right;
  position: relative;
  & .social-area {
    text-align: right;
    margin-bottom: 30px;
    @media screen and (max-width: 780px) {
      & {
        display: none;
      }
    }
    & img {
      width: 34px;
      margin-left: 5px;
    }
  }
  & .hamburger {
    color: ${colors.accent};
    position: absolute;
    top: 0px;
    right: 10px;
    width: 44px;
    display: none;
    @media screen and (max-width: 780px) {
      display: block;
    }
  }
  & .search {
    @media screen and (max-width: 780px) {
      display: none;
    }
  }
  & .side-menu {
    z-index: 99;
    background-color: #f1f1f1;
    padding: 20px;
    position: fixed;
    top: 70px;
    width: 50vw;
    right: -50vw;
    transition: all 0.3s;
    border-radius: 4px;
    @media screen and (max-width: 480px) {
      width: 100vw;
      right: -100vw;
    }
    & .navbar-start {
      & .navbar-item {
        display: block;
        margin-bottom: 10px;
        color: ${colors.black};
        font-weight: 600;
        font-size: 13px;
        padding: 20px;
      }
      & .navbar-item.active {
        color: $accent;
      }
    }
    & .social-area {
      display: block;
      & img {
        margin: 20px;
      }
    }

    &.active {
      right: -50vw;
      @media screen and (max-width: 780px) {
        right: 0;
      }
    }
  }
`;

const NavMenu = styled.div`
  box-shadow: none !important;
  margin-top: 40px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 13px;
  & .navbar-start {
    @media screen and (max-width: 780px) {
      display: none;
    }
    & .navbar-item {
      transition: all 0.3s;
      margin-right: 48px;
      padding: 10px;
      border-radius: 5px;
      color: ${colors.black};
      @media screen and (max-width: 1120px) {
        margin-right: 30px;
      }
      @media screen and (max-width: 900px) {
        margin-right: 15px;
      }
    }
    & .navbar-item.active {
      color: ${colors.accent};
    }
  }
`;

const Search = styled.div`
  position: relative;
  .search-input {
    border-radius: 4px;
    height: 34px;
    padding: 2px;
    padding-left: 30px;
    border: 1px solid rgba(0, 0, 0, 0.19);
  }
  .search-icon {
    width: 24px;
    position: absolute;
    top: 7px;
    left: 5px;
    color: rgba(0, 0, 0, 0.19);
  }
`;
