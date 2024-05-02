import React, { useState } from 'react';
import Label from '../Label/Label';
import cx from 'classnames';
import './RadioGroup.css';

const RadioGroup = ({
  options,
  className,
  onChange,
}) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className={cx('radio-group-component-container',className)}>
      <Label
        text="Choose answer"
        className="radio-group-label"
      />
      {options.map((option) => (
        <div className='radio-option' key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleOptionChange(option.value)}
          />
          <div
            className={`radio-option-label
            ${selectedOption === option.value ? 'selected' : ''}`}
          >
            {option.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;

