
import * as React from "react";

function DeSelect(props) {
  return (
    <svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
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
        width={15}
        height={16}
      >
        <path fill="#667085" d="M0 0.5H15V15.5H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M4 12.375l-.875-.875 3.5-3.5-3.5-3.5L4 3.625l3.5 3.5 3.5-3.5.875.875-3.5 3.5 3.5 3.5-.875.875-3.5-3.5-3.5 3.5z"
          fill="#667085"
        />
      </g>
    </svg>
  );
}

export default DeSelect;
