import * as React from "react";

function BackarrowIcon(props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.0991211} width={32} height={32} rx={5} fill="#fff" />
      <path
        d="M11.924 17l5.6 5.6L16.1 24l-8-8 8-8 1.425 1.4-5.6 5.6H24.1v2H11.924z"
        fill="#1C1B1F"
      />
    </svg>
  );
}

export default BackarrowIcon;
