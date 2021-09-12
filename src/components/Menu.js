import React from "react";
import { Link } from 'gatsby'

function Menu() {
  return (
    <>
      <div className="navbar-start has-text-centered">
        <Link className="navbar-item" to="/">
          HOME
        </Link>
        <Link className="navbar-item" to="/about">
          ABOUT
        </Link>
        <Link className="navbar-item" to="/contact">
          CONATACT
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          SIGN THE PETITION
        </Link>
      </div>
    </>
  );
}

export default Menu;
