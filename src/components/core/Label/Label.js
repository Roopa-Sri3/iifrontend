import React from "react";

function Label ({
  htmlFor,
  text,
  className,
  children,
  ...restLabelProps
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      {...restLabelProps}
    >
      {text}
      {children}
    </label>
  );
}

export default Label;
