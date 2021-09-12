import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo1.webp";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import Menu from "./Menu";
import SocialLinks from "./SocialLinks";

const Footer = ({ path }) => {
  return (
    <footer className="footer ">
      <div className="container has-background-black has-text-white-ter">
        <div style={{ maxWidth: "100vw" }} className="footer-left">
          <div className="column is-4">
            <Menu path={path} />
          </div>
          <div className="cta">
            Get Involved!
          </div>
          <div className="column is-4">
            <section>
              <ul className="menu-list">
                <li>
                  <a className="contact-item" href="tel:18681112222">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="phone-icon icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text">1 868 111 2222</span>
                  </a>
                </li>
                <li>
                  <a className="contact-item" href="tel:18681112222">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="phone-icon icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text">1 868 111 2222</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="footer-right">
          <div className="spacer"></div>
          <div className="content has-text-centered">
            <img src={logo} alt="EcoWatchTT" style={{ width: "14em" }} />
          </div>
          <div className="column is-4 social">
            
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
