import React from "react";
import facebook from "../img/social/facebook.svg"
import twitter from "../img/social/twitter.svg"
function SocialLinks() {
  return (
    <>
      <a href="https://facebook.com"> <img src={facebook} alt="facebook" /></a>
      <a href="https://twitter.com"> <img src={twitter} alt="twitter" /></a>
    </>
  );
}

export default SocialLinks;
