import React from "react";
import cx from "classnames";
import "./OptionItem.css";

const OptionItem = ({
  id,
  value,
  label,
  checked = false,
  onChange,
  disabled,
}) => (
  <div
    className={
      cx("option-item", checked ? "checked" : "", disabled ? "disabled" : "")
    }>
    <input
      className="option-item-check-box"
      type="checkbox"
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <label
      htmlFor={id}
      className={cx("option-item-field-label", disabled ? "disabled" : " ")}
    >
      {label}
    </label>
  </div>
);

export default OptionItem;
