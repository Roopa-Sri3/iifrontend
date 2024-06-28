
import  React from "react";

function CloseLogo({color,
  onClick,className
}) {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        className={className}
      >
        <mask id="mask0_241_365" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill={color}/>
        </mask>
        <g mask="url(#mask0_241_365)">
          <path d="M6.4 19L5 17.6L10.6 12L5 6.39995L6.4 4.99995L12 10.6L17.6 4.99995L19 6.39995L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#1C1B1F"/>
        </g>
      </svg>
    </>

  );
}

export default CloseLogo;
