import React from "react";

const OptionItem = ({
  id,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="option-item">
      <input
        className="check-box"
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default OptionItem;
