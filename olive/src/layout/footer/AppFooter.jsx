import React from "react";
import "./AppFooter.css";

import logoWhite from "../../assets/logo_white_background.png";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links-left">
        <ul>
          <li>CONSECTETUR</li>
          <li>CONSECTETUR</li>
          <li>CONSECTETUR</li>
        </ul>
      </div>
      <div className="footer-links-right">
        <ul>
          <li>CONSECTETUR</li>
          <li>CONSECTETUR</li>
          <li>CONSECTETUR</li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logoWhite} alt="logo" />
      </div>
      <div className="footer-phone">
        <p>+48 000 000 000</p>
      </div>
      <div className="footer-privacy-policy">
        <p>POLITYKA PRYWATNOŚCI</p>
      </div>
    </footer>
  );
};
