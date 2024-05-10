import React from "react";

function UserIcon({ src, alt, onClick }) {
  return (
    <img src={src} alt={alt} className='icon' />
  );
}

export default UserIcon;
