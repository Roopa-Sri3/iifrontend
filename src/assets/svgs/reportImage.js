import * as React from "react";

function SaveComponent(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
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
        width={20}
        height={20}
      >
        <path fill="#6F7683" d="M0 0H20V20H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M14.918 13.334l-4.194-4.167 1.174-1.208 2.18 2.166V3.333h1.678v6.792l2.18-2.167 1.175 1.209-4.194 4.167zm-5.033 3.333a1.62 1.62 0 01-1.184-.49A1.6 1.6 0 018.208 15v-2.5h1.677V15H19.95v-2.5h1.677V15a1.6 1.6 0 01-.492 1.177 1.62 1.62 0 01-1.185.49H9.885z"
          fill="#6F7683"
        />
      </g>
    </svg>
  );
}

export default SaveComponent;
