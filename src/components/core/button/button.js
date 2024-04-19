import React from 'react';
import cx from 'classnames';
import './button.css';

const Button = ({
  label,
  handleClick,
  id,
  className,
  disabled = false,
  children,
}) =>{
  return (
    <button
      id={id}
      className={cx('button',className)}
      onClick={handleClick}
      disabled={disabled}
    >
      {children || label}
    </button>
  );
};
export default Button;
