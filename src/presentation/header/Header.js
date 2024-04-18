import React from 'react';
import './Header.css';
import img from "../../images/company-logo.png";
function Header() {
  return (
    <div className='header'>
      <img src={img} alt="..." className='company-logo'></img>
      <span className='project-title'>Interview Insights</span>
    </div>
  );
}

export default Header;
