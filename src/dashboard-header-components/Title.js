import React from "react";

function Title({
  text,
  ...restTitleProps
}) {
  return <div {...restTitleProps}>{text}</div>;
}

export default Title;
