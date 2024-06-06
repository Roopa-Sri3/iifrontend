
import * as React from "react";

function RedClose(props) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
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
        width={18}
        height={18}
      >
        <path fill="#1D8A00" d="M0 0H18V18H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M4.8 14.25L3.75 13.2 7.95 9l-4.2-4.2L4.8 3.75 9 7.95l4.2-4.2 1.05 1.05-4.2 4.2 4.2 4.2-1.05 1.05-4.2-4.2-4.2 4.2z"
          fill="#D57777"
        />
      </g>
    </svg>
  );
}

export default RedClose;
