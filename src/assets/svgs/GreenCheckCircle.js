
import * as React from "react";

function CheckCircle(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path fill="#1D8A00" d="M0 0H24V24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M10.6 16.6l7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25zM12 22a9.738 9.738 0 01-3.9-.788 10.099 10.099 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 012 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 012.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0112 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 013.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0122 12a9.738 9.738 0 01-.788 3.9 10.098 10.098 0 01-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0112 22z"
          fill="#1D8A00"
        />
      </g>
    </svg>
  );
}

export default CheckCircle;

