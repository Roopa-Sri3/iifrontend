import React from "react";

function FeedbackStarIcon({
  fillColor = "#D9D9D9",
  ...otherProps
}) {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M5.28125 24.25L7.3125 15.4688L0.5 9.5625L9.5 8.78125L13 0.5L16.5 8.78125L25.5 9.5625L18.6875 15.4688L20.7188 24.25L13 19.5938L5.28125 24.25Z"
        fill={fillColor}
      />
    </svg>

  );
}
export default FeedbackStarIcon;
