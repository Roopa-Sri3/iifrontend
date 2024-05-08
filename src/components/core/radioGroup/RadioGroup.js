import React from 'react';
import Label from '../Label/Label';
import cx from 'classnames';
import './RadioGroup.css';

const RadioGroup = ({
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
    if (event.key === 'Enter' || event.key === " ") {
      onChange(optionValue);
    }
  };

  return (
    <div className={cx('radio-group-component-container',className)}>
      <Label
        text={label}
        className="radio-group-label"
      />
      {options.map((option) => (
        <div className='radio-option' key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleOptionChange(option.value)}
          />
          <div
            role="button"
            tabIndex="0"
            className={`radio-option-label
            ${selectedValue === option.value ? 'selected' : ''}`}
            onClick={() => handleOptionChange(option.value)}
            onKeyDown={handleKeyDown(option.value)}
          >
            {option.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;

