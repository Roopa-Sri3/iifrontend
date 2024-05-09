import * as React from "react";

function DownloadIcon({
  fillColor = "#6F7683",
  ...otherProps
}) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M6.71 10.334L2.516 6.167 3.69 4.959l2.181 2.166V.333h1.677v6.792L9.73 4.958l1.174 1.209-4.193 4.167zm-5.033 3.333a1.62 1.62 0 01-1.184-.49A1.6 1.6 0 010 12V9.5h1.677V12h10.065V9.5h1.677V12a1.6 1.6 0 01-.492 1.177 1.62 1.62 0 01-1.185.49H1.677z"
        fill={fillColor}
      />
    </svg>
  );
}

export default DownloadIcon;
