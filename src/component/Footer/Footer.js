import React from "react";
import facebookIcon from "../../image/facebookIcon.svg";
import googleIcon from "../../image/googleIcon.svg";
import twitterIcon from "../../image/twitterIcon.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <img src={facebookIcon} alt="facebookIcon" />
        <img src={googleIcon} alt="googleIcon" />
        <img src={twitterIcon} alt="twitterIcon" />
      </div>
      <div className="footerTitle">©2020 PodPayment - 2020</div>
    </div>
  );
};
