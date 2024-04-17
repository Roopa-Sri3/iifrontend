import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({label,handleClick, id,className,disabled}) =>{
  const buttonClasses = cx(styles.button, className, {
    [styles.disabled]:disabled,
  });
  return (
    <button
      id={id}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label:propTypes.string,
  handleClick:propTypes.func,
  id:propTypes.string,
  className:propTypes.string,
  disabled:propTypes.bool,
};

Button.defaultProps = {
  id:'',
  className:'',
  disabled:false,
};

export default Button;
