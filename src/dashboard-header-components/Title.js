import React from "react";

function Title({
  text,
  ...restTitleProps
}) {
  return <h5 {...restTitleProps}>{text}</h5>;
}

export default Title;
