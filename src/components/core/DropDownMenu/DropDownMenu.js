import React, { useState } from "react";

const DropDownMenu = ({ options, onOptionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initialOptions = {};
    options.forEach((option) => {
      initialOptions[option] = false;
    });
    return initialOptions;
  });

  const handleOptionChange = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
    onOptionChange(selectedOptions);
  };

  return (
    <div className="dropdown-menu">
      {options.map((option) => (
        <div key={option} className="dropdown-option">
          <input
            type="checkbox"
            checked={selectedOptions[option]}
            onChange={() => handleOptionChange(option)}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
