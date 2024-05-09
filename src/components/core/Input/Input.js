import React from "react";

function Input ({
  type,
  placeholder,
  id,
  onChange,
  autoComplete,
  name,
  value,
  onFocus,
  className,
  disabled,
  required,
  minLength,
  maxLength,
  ...restInputProps
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      autoComplete={autoComplete}
      name = {name}
      value = {value}
      onFocus = {onFocus}
      className = {className}
      disabled = {disabled}
      required = {required}
      minLength = {minLength}
      maxLength = {maxLength}
      {...restInputProps}
    />
  );
}

export default Input;
