import React from "react";
import { placeholders } from "../../textPlaceholders";
import "./AppHeader.css";

import logoHeader from "../../assets/logo_header.png";

export const Header = ({ setLanguagePreference, languagePreference }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-nav-phone">
          <h5>+48 000 000 000</h5>
          <ul>
            <li>CONSECTETUR</li>
            <li>CONSECTETUR</li>
            <li>CONSECTETUR</li>
          </ul>
        </div>
        <div className="header-nav-language">
          <p>
            <span
              onClick={() => {
                setLanguagePreference(0);
              }}
            >
              <button disabled={languagePreference === 0}>PL</button>
            </span>
            <span
              onClick={() => {
                setLanguagePreference(1);
              }}
            >
              <button disabled={languagePreference === 1}>UA</button>
            </span>
            <span
              onClick={() => {
                setLanguagePreference(2);
              }}
            >
              <button disabled={languagePreference === 2}>RU</button>
            </span>
          </p>
          <ul>
            <li>CONSECTETUR</li>
            <li>CONSECTETUR</li>
            <li>CONSECTETUR</li>
          </ul>
        </div>
        <div className="header-logo">
          <img src={logoHeader} alt="logo" />
        </div>
        <div className="header-title">
          <h1>{placeholders[languagePreference].mainTitle}</h1>
          <p>{placeholders[languagePreference].mainTitle}</p>
          <button>CONSECTETUR</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
