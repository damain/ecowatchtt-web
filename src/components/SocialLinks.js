import React from "react";
import facebook from "../img/social/facebook.svg"
import twitter from "../img/social/twitter.svg"
function SocialLinks() {
  return (
    <>
      <a href=""> <img src={facebook} alt="facebook" /></a>
      <a href=""> <img src={twitter} alt="twitter" /></a>
    </>
  );
}

export default SocialLinks;
