import * as React from "react";

function FileIcon(props) {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15.5854" r="15" fill="#DAEAFF"/>
      <mask id="mask0_1189_597" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="6" y="6" width="18" height="19">
        <rect x="6" y="6.58545" width="18" height="18" fill="#196AD6"/>
      </mask>
      <g mask="url(#mask0_1189_597)">
        <path d="M10.5 23.0854C10.0875 23.0854 9.73438 22.9386 9.44063 22.6448C9.14688 22.3511 9 21.9979 9 21.5854V9.58545C9 9.17295 9.14688 8.81982 9.44063 8.52607C9.73438 8.23232 10.0875 8.08545 10.5 8.08545H16.5L21 12.5854V21.5854C21 21.9979 20.8531 22.3511 20.5594 22.6448C20.2656 22.9386 19.9125 23.0854 19.5 23.0854H10.5ZM15.75 13.3354V9.58545H10.5V21.5854H19.5V13.3354H15.75Z" fill="#196AD6"/>
      </g>
    </svg>
  );
}

export default FileIcon;
