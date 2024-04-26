/* eslint-disable max-len */
import * as React from "react";

function UploadIcon(props) {
  return (
    <svg
      width={38}
      height={39}
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={18.9226}
        cy={19.6548}
        r={18.3462}
        fill="#fff"
        stroke="#D9E0E6"
      />
      <mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={9}
        y={10}
        width={19}
        height={19}
      >
        <path fill="#D9D9D9" d="M9.92285 10.6548H27.92285V28.6548H9.92285z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M18.173 22.655v-6.112l-1.95 1.95-1.05-1.088 3.75-3.75 3.75 3.75-1.05 1.088-1.95-1.95v6.112h-1.5zm-3.75 3c-.413 0-.766-.147-1.06-.44a1.444 1.444 0 01-.44-1.06v-2.25h1.5v2.25h9v-2.25h1.5v2.25c0 .413-.147.766-.44 1.06-.294.293-.648.44-1.06.44h-9z"
          fill="#2F3950"
        />
      </g>
    </svg>
  );
}

export default UploadIcon;
