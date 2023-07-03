import React, { useState } from "react";

const LanguageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative p-6">
      <button
        className="flex items-center focus:outline-none"
        onClick={toggleDropdown}
      >
        {selectedLanguage === "fr" ? (
          <img src={`/assets/img/france.png`} className="w-6 h-6 mr-2" />
        ) : selectedLanguage === "mg" ? (
          <img src={`/assets/img/madagascar.png`} className="w-6 h-6 mr-2" />
        ) : (
          <img src={`/assets/img/english.png`} className="w-6 h-6 mr-2" />
        )}
        <span className="text-subMain">{selectedLanguage === "fr" ? "Fr" : selectedLanguage === "mg" ? "Mlg" : "Ang"}</span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-40 bg-fond rounded-md shadow-lg">
          <button
            className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
            onClick={() => selectLanguage("fr")}
          >
            <img src={`/assets/img/france.png`} className="w-6 h-6 mr-2" />
            <span className="text-subMain">Fr</span>
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
            onClick={() => selectLanguage("mg")}
          >
            <img src={`/assets/img/madagascar.png`} className="w-6 h-6 mr-2" />
            <span className="text-subMain">Mg</span>
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
            onClick={() => selectLanguage("en")}
          >
            <img src={`/assets/img/english.png`} className="w-6 h-6 mr-2" />
            <span className="text-subMain">Ang</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;