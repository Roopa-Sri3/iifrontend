import * as React from "react";

function Expand(props) {
  return (
    <svg
      color="red"
      width={20}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.014.884L5.798 5.1 1.58.884.298 2.167l5.5 5.5 5.5-5.5L10.014.884z"
        fill="#fff"
      />
    </svg>
  );
}

export default Expand;
