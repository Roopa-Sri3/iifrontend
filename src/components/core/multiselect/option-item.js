import React from "react";

const OptionItem = ({
  id,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <div>
      <input
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
