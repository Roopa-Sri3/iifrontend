/* eslint-disable max-len */
import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.667 19v-3.334h16.666V19H.667zM4 12.333h1.167l6.5-6.479-1.188-1.188L4 11.166v1.167zM2.333 14v-3.542l9.334-9.312a1.646 1.646 0 011.167-.48c.222 0 .437.042.645.126.209.083.396.208.563.375l1.146 1.166c.166.153.288.333.364.542.077.208.115.423.115.646 0 .208-.038.413-.115.614a1.563 1.563 0 01-.364.552L5.875 14H2.333z"
        fill="#383838"
      />
    </svg>
  );
}

export default SvgComponent;
