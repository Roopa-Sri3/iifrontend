import React from 'react';
const Checkbox = ({
  label,
  checked,
  onChange,
  disabled
}) => {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  return (
    <div className='app-container'>
      <input type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label>{label}</label>
    </div>
  );
};
export default Checkbox;

