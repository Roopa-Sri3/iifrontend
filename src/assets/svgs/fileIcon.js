import React from "react";

const FileIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#DAEAFF" />
    <mask
      id="mask0_938_8444"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="6"
      y="6"
      width="18"
      height="18"
    >
      <rect x="6" y="6" width="18" height="18" fill="#196AD6" />
    </mask>
    <g mask="url(#mask0_938_8444)">
      <path
        d="M10.5 22.5C10.0875 22.5 9.73438 22.3531 9.44063 22.0594C9.14688 21.7656 9 21.4125 9 21V9C9 8.5875 9.14688 8.23438 9.44063 7.94063C9.73438 7.64688 10.0875 7.5 10.5 7.5H16.5L21 12V21C21 21.4125 20.8531 21.7656 20.5594 22.0594C20.2656 22.3531 19.9125 22.5 19.5 22.5H10.5ZM15.75 12.75V9H10.5V21H19.5V12.75H15.75Z"
        fill="#196AD6"
      />
    </g>
  </svg>
);

export default FileIcon;
