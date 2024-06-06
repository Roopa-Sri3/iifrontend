import * as React from "react";

function ChevronRight(props) {
  return (
    <svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 4.6L10.6 0 12 1.4l-6 6-6-6L1.4 0 6 4.6z" fill="#6F7683" />
    </svg>
  );
}

export default ChevronRight;
