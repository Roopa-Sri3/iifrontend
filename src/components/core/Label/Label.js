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
      {...restLabelProps}
    >{text}</label>
  );
}

export default Label;
