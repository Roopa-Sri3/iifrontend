import * as React from "react";

function SelectedCheckComponent(props) {
  return (
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
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
        width={21}
        height={20}
      >
        <path fill="#1967D2" d="M0.5 0H20.5V20H0.5z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M9.1 14.2l7.05-7.05-1.4-1.4L9.1 11.4 6.25 8.55l-1.4 1.4L9.1 14.2zM3.5 19c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 011.5 17V3c0-.55.196-1.02.587-1.413A1.926 1.926 0 013.5 1h14c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0117.5 19h-14z"
          fill="#1967D2"
        />
      </g>
    </svg>
  );
}

export default SelectedCheckComponent;

