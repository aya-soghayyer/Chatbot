// components/SelectLanguageSpeak.js
import React from 'react';

function SelectLanguageSpeak({ language, setLanguage }) {
  return (
    <div className="flex space-x-2 mb-1 items-center">
      <label
        htmlFor="language"
        className="font-medium text-white text-xs md:text-base grid justify-start"
      >
        Select Language To Speak:
      </label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="py-1 h-8 text-white bg-opacity-10 rounded-2xl bg-primary font-medium w-fit text-xs"
      >
        <option value="en-US" className="bg-primary">
          EN
        </option>
        <option value="ar-SA" className="bg-primary">
          AR
        </option>
      </select>
    </div>
  );
}

export default SelectLanguageSpeak;