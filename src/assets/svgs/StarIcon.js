
import * as React from "react";

function StarIcon({
  fillColor = "#D9D9D9",
  ...otherProps})
{
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M3.825 19l1.625-7.025L0 7.25l7.2-.625L10 0l2.8 6.625 7.2.625-5.45 4.725L16.175 19 10 15.275 3.825 19z"
        fill={fillColor}
      />
    </svg>
  );
}

export default StarIcon;
