import React from 'react';

function Title({
  text,
  ...restTitleProps
}) {
  return <p {...restTitleProps}>{text}</p>;
}

export default Title;
