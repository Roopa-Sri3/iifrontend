import React from "react";
import cx from "classnames";
import "./button.css";

const Button = ({
  label,
  handleClick,
  id,
  className,
  disabled = false,
  children,
}) => (
  <button
    id={id}
    className={cx("buttonComponent", className)}
    onClick={handleClick}
    disabled={disabled}
  >
    <div className={children ? "buttonComponentContainer" : ""}>
      <div className={children ? "buttonComponentLabel" : ""}>{label}</div>
      {children}
    </div>
  </button>
);
export default Button;
