import React from 'react';

function Logo({ src, alt }) {
  return <img src={src} alt={alt} className='logo' />;
}

export default Logo;