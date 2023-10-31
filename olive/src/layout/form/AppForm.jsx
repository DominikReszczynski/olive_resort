import React from "react";
import "./AppForm.css";

import { placeholders } from "../../textPlaceholders";

export const Form = ({ languagePreference }) => {
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <div className="form-without-button-container">
          <h2>{placeholders[languagePreference].makeAnAppointment}</h2>
          <div className='input-group'>
            <input
              type="text"
              placeholder={placeholders[languagePreference].name}
            ></input>
            <input
              type="number"
              placeholder={placeholders[languagePreference].phoneNumber}
            ></input>
          </div>
          <div className='input-group'>
            <input
              type="text"
              placeholder={placeholders[languagePreference].secondName}
            ></input>
            <input
              type="text"
              placeholder={placeholders[languagePreference].mail}
            ></input>
          </div>
          <p>
            <input type="checkbox" id="customCheck" name="customCheck" />
            <label for="customCheck">{placeholders[languagePreference].comfirm}</label>
          </p>
        </div>
        <button>
          <span>{placeholders[languagePreference].send}</span>
        </button>
      </div>
    </div>
  );
};
