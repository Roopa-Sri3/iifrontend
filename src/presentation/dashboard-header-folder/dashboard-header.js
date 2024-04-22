import React from 'react';
import './dashboard-header.css';
import companylogo from '../../images/company-symbol.png';
import usericon from '../../images/user-icon.png';

function Logo({ src, alt }) {
  return <img src={src} alt={alt} className='logo' />;
}

function Title({ text }) {
  return <p className='title'>{text}</p>;
}

function UserIcon({ src, alt }) {
  return <img src={src} alt={alt} className='icon' />;
}

function Header(){

  return (
    <div className="header">
      <Logo src={companylogo} alt="Hal"/>

      <div className="title-container">
        <Title text="Interview Insights"/>
      </div>
      <div className = "user-icon">
        <UserIcon src={usericon} alt="user"/>

      </div>
    </div>
  );
}

export default Header;
