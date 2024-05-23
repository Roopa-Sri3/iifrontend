import React from "react";
// import cx from 'classnames';
import "./button.css";

const Button = ({
  label,
  handleClick,
  id,
  className,
  disabled = false,
  children,
}) => {
  const buttonClass = className ? `${className} button` : "button";
  return (
    <button
      id={id}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className={children ? "buttonContainer" : ""}>
        <div className={children ? "label" : ""}>{label}</div>
        {children}
      </div>
    </button>
  );
};
export default Button;
