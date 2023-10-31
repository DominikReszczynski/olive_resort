import React, { useState } from "react";
import { Footer } from "./layout/footer/AppFooter";
import { Header } from "./layout/header/AppHeader";
import { Form } from "./layout/form/AppForm";
import { placeholders } from "./textPlaceholders";
import "./App.css";

import home from "./assets/house.png";
import visualization from "./assets/wizualizacje_wnętrzne.png";
import sea from "./assets/sea.png";
import gardenHouse from "./assets/house_with_garden.png";
import homeInside from "./assets/home_inside.png";
import houseProject from "./assets/house_project.png";
import arrow from "./assets/arrow.png";

function App() {
  const [languagePreference, setLanguagePreference] = useState(0);

  const [textFirstSlider, setTextFirstSlider] = useState(1);
  const [textSecondSlider, setTextSecondSlider] = useState(1);
  const [imgFirstSlider, setImgFirstSlider] = useState(1);
  const [imgSecondSlider, setImgSecondSlider] = useState(1);

  return (
    <div className="App">
      <Header
        setLanguagePreference={setLanguagePreference}
        languagePreference={languagePreference}
      />

      <div className="plate-container resort">
        <div className="brown-plate-text">
          <h2>{placeholders[languagePreference].titleText2}</h2>
          <p>{placeholders[languagePreference].text2}</p>
        </div>
      </div>

      <div className="home-gallery-right-container">
        <img src={home} alt="home" />
        <img src={home} alt="home" />
        <img src={home} alt="home" />
        <img src={visualization} alt="arrow" />
      </div>

      <div className="plate-container olive">
        <div className="transparent-plate-text">
          {textFirstSlider !== 1 && (
            <>
              <h2>{placeholders[languagePreference].titleText1}</h2>
              <p>{placeholders[languagePreference].text1}</p>
            </>
          )}
          {textFirstSlider === 1 && (
            <>
              <h2>{placeholders[languagePreference].titleText2}</h2>
              <p>{placeholders[languagePreference].text2}</p>
            </>
          )}
          <div className="button-conteiner">
            <button
              disabled={textFirstSlider === 1}
              onClick={() => setTextFirstSlider(textFirstSlider + 1)}
            >
              <img src={arrow} alt="arrow right" />
            </button>
            <button
              disabled={textFirstSlider !== 1}
              onClick={() => setTextFirstSlider(textFirstSlider - 1)}
            >
              <img src={arrow} alt="arrow left" />
            </button>
          </div>
        </div>
      </div>

      <div className="m2-main-container">
        <div className="project-container">
          <div className="transparent-plate-text special">
            <h2>Fenomen ISTRII</h2>
          </div>
        </div>
      </div>

      <div className="photo-gallery">
        <div>
          <img
            className={`arrow-up ${imgFirstSlider === 1 ? "" : "disabled"}`}
            onClick={() => setImgFirstSlider(1)}
            src={arrow}
            alt="arrow up"
          />
          <img
            className={`arrow-down ${imgFirstSlider !== 1 ? "" : "disabled"}`}
            onClick={() => setImgFirstSlider(0)}
            src={arrow}
            alt="arrow down"
          />
        </div>
        {imgFirstSlider === 1 && (
          <img className="landscape-photos" src={sea} alt="sea" />
        )}
        {imgFirstSlider !== 1 && (
          <img
            className="landscape-photos"
            src={gardenHouse}
            alt="gardenHouse"
          />
        )}
      </div>

      <div className="plate-container">
        <div className="transparent-plate-text">
          {textSecondSlider === 1 && (
            <p>{placeholders[languagePreference].text1}</p>
          )}
          {textSecondSlider !== 1 && (
            <p>{placeholders[languagePreference].text2}</p>
          )}
          <div className="button-conteiner">
            <button
              disabled={textSecondSlider === 1}
              onClick={() => setTextSecondSlider(textSecondSlider + 1)}
            >
              <img src={arrow} alt="arrow right" />
            </button>
            <button
              disabled={textSecondSlider !== 1}
              onClick={() => setTextSecondSlider(textSecondSlider - 1)}
            >
              <img src={arrow} alt="arrow left" />
            </button>
          </div>
        </div>
      </div>

      <div className="photo-gallery2">
        <div>
          <img
            className={`arrow-up ${imgSecondSlider === 1 ? "" : "disabled"}`}
            onClick={() => setImgSecondSlider(1)}
            src={arrow}
            alt="arrow up"
          />
          <img
            className={`arrow-down ${imgSecondSlider !== 1 ? "" : "disabled"}`}
            onClick={() => setImgSecondSlider(0)}
            src={arrow}
            alt="arrow down"
          />
        </div>
        {imgSecondSlider !== 1 && (
          <img className="landscape-photos" src={sea} alt="sea" />
        )}
        {imgSecondSlider === 1 && (
          <img
            className="landscape-photos"
            src={gardenHouse}
            alt="gardenHouse"
          />
        )}
      </div>

      <div className="plate-container olive2">
        <div className="brown-plate-text">
          <h2>
            {placeholders[languagePreference].titleText1}{" "}
            <span>({placeholders[languagePreference].titleText2})</span>
          </h2>
          <p>{placeholders[languagePreference].text2}</p>
          <p>
            {placeholders[languagePreference].link1} <span>&#x27F6;</span>
          </p>
        </div>
      </div>

      <div className="m2-main-container">
        <div className="project-container">
          <div className="transparent-plate-text special">
            <h2>
              <span>150</span>
              <span>m²</span> --- <span>150</span>
              <span>m²</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="home-gallery-left-container">
        <img src={visualization} alt="arrow" />
        <img src={homeInside} alt="home" />
        <img src={homeInside} alt="home" />
        <img src={homeInside} alt="home" />
      </div>

      <div className="plate-container resort2">
        <div className="project-container">
          <div className="transparent-plate-text special">
            <h2>{placeholders[languagePreference].titleText2}</h2>
            <p>{placeholders[languagePreference].findHome}</p>
            <p>
              {placeholders[languagePreference].link1} <span>&#x27F6;</span>
            </p>
          </div>
          <img
            className="house-project-img"
            src={houseProject}
            alt="house project"
          />
        </div>
      </div>

      <div className="plate-container">
        <div className="text-plate-green">
          <h2>{placeholders[languagePreference].titleText1}</h2>
          <p>{placeholders[languagePreference].text1}</p>
          <br />
          <p>
            {placeholders[languagePreference].link1} <span>&#x27F6;</span>
          </p>
        </div>
      </div>

      <Form languagePreference={languagePreference} />

      <Footer />
    </div>
  );
}

export default App;
