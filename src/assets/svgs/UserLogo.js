
import React from "react";

function UserLogo(props) {
  return (
    <>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_241_369)">
          <rect x="2" y="1" width="48" height="48" rx="10" fill="white"/>
          <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#E4E7EC"/>
        </g>
        <mask id="mask0_241_369" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="14" y="13" width="24" height="24">
          <rect x="14" y="13" width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_241_369)">
          <path d="M32 27V24H29V22H32V19H34V22H37V24H34V27H32ZM23 25C21.9 25 20.9583 24.6083 20.175 23.825C19.3917 23.0417 19 22.1 19 21C19 19.9 19.3917 18.9583 20.175 18.175C20.9583 17.3917 21.9 17 23 17C24.1 17 25.0417 17.3917 25.825 18.175C26.6083 18.9583 27 19.9 27 21C27 22.1 26.6083 23.0417 25.825 23.825C25.0417 24.6083 24.1 25 23 25ZM15 33V30.2C15 29.6333 15.1458 29.1125 15.4375 28.6375C15.7292 28.1625 16.1167 27.8 16.6 27.55C17.6333 27.0333 18.6833 26.6458 19.75 26.3875C20.8167 26.1292 21.9 26 23 26C24.1 26 25.1833 26.1292 26.25 26.3875C27.3167 26.6458 28.3667 27.0333 29.4 27.55C29.8833 27.8 30.2708 28.1625 30.5625 28.6375C30.8542 29.1125 31 29.6333 31 30.2V33H15Z" fill="#1C1B1F"/>
        </g>
        <defs>
          <filter id="filter0_d_241_369" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_369"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_369" result="shape"/>
          </filter>
        </defs>
      </svg>

    </>
  );
}

export default UserLogo;
