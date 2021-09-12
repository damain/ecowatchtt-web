import React from "react";
import { Link } from 'gatsby'

function Menu({path}) {

  return (
    <>
      <div className="navbar-start has-text-centered">
        <Link className={`navbar-item ${path=== "/" ? "active" : ""}`} to="/" >
          HOME
        </Link>
        <Link className={`navbar-item ${path=== "/about/" ? "active" : ""}`}to="/about">
          ABOUT
        </Link>
        <Link className={`navbar-item ${path=== "/contact/" ? "active" : ""}`} to="/contact">
          CONATACT
        </Link>
        <Link className={`navbar-item cta-button`} to="/contact/examples">
          SIGN THE PETITION
        </Link>
      </div>
    </>
  );
}

export default Menu;
