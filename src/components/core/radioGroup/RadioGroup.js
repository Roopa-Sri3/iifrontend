import React from "react";
import Label from "../Label/Label";
import cx from "classnames";
import "./RadioGroup.css";

const RadioGroup = ({
  groupId,
  label,
  options,
  className,
  onChange,
  selectedValue,
}) => {
  const handleOptionChange = (optionValue) => {
    onChange(optionValue);
  };

  const handleKeyDown = (event,optionValue) => {
    if (event.key === "Enter" || event.key === " ") {
      onChange(optionValue);
    }
  };

  return (
    <div className={cx("radio-group-component-container",className)}>
      <Label
        text={label}
        className="radio-group-label"
      />
      {options.map((option) => (
        <div className='radio-option' key={`${groupId}-${option}`}>
          <input
            type="radio"
            value={option}
            checked={selectedValue === option}
            onChange={() => handleOptionChange(option)}
          />
          <div
            role="button"
            tabIndex="0"
            className={`radio-option-label
            ${selectedValue === option ? "selected" : ""}`}
            onClick={() => handleOptionChange(option)}
            onKeyDown={(event) => handleKeyDown(event, option)}
          >
            {option}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;

