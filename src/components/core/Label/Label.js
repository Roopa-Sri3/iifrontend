import React from 'react';

function Label ({
  htmlFor,
  text,
  className,
  ...restLabelProps
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      {...restLabelProps}
    >
      {text}
    </label>
  );
}

export default Label;
