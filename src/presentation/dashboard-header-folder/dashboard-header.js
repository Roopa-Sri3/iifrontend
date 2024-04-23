import React,{ useState } from 'react';
import companylogo from '../../images/company-symbol.png';
import usericon from '../../images/user-icon.png';
import './dashboard-header.css';

function Logo({ src, alt }) {
  return <img src={src} alt={alt} className='logo' />;
}

function Title({ text }) {
  return <p className='title'>{text}</p>;
}

function UserIcon({ src, alt }) {
  return <img src={src} alt={alt} className='icon' />;
}

function LogoutButton({ onClick }) {
  return (
    <button className="logout-button" onClick={onClick}>
      Logout
    </button>
  );
}
const Header = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleUserIconClick = () => {
    setShowLogout(!showLogout);
  };

  // function Header(){

  return (
    <div className="header">
      <Logo src={companylogo} alt="Hal"/>

      <div className="title-container">
        <Title text="Interview Insights"/>
      </div>
      <div className = "user-icon">
        <UserIcon src={usericon} alt="user" onClick={handleUserIconClick} />
        {showLogout && <LogoutButton onClick={handleUserIconClick} />}
      </div>
    </div>
  );
};

export default Header;
