import React from "react";
import "./checkbox.css";
const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  disabled
}) => {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  return (
    <div className='checkbox-container'>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className="checkbox-label"
      >
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
