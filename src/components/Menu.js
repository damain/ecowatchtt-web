import React from "react";
import { Link } from 'gatsby'

function Menu({path}) {

  return (
    <>
      <div className="navbar-start has-text-centered">
        <Link className={`navbar-item ${path=== "/" ? "active" : ""}`} to="/" >
          HOME
        </Link>
        <Link className={`navbar-item ${path=== "/about/" ? "active" : ""}`} to="/about">
          ABOUT
        </Link>
        <Link className={`navbar-item ${path=== "/blog/" ? "active" : ""}`} to="/blog">
          ADDITIONAL RESOURCES
        </Link>
        <Link className={`navbar-item ${path=== "/contact/" ? "active" : ""}`} to="/contact">
          CONTACT
        </Link>
        <a target="_blank" className={`navbar-item cta-button`} href="https://www.change.org/p/commissioner-of-state-lands-of-the-ministry-of-agriculture-land-and-fisheries-cosl-placeholder">
          SIGN THE PETITION
        </a>
      </div>
    </>
  );
}

export default Menu;
