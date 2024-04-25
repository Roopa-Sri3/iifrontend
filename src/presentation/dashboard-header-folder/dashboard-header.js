import React, { useState } from 'react';
import companylogo from '../../images/company-symbol.png';
import Innovalogo from '../../dashboard-header-components/Logo';
import Title from '../../dashboard-header-components/Title';
import RoundButton from '../../dashboard-header-components/RoundButton';
import './dashboard-header.css';
import Expand from '../../components/core/assets/svgs/Expand';
import LogoutIcons from '../../components/core/assets/svgs/LougoutIcons';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLogout, setShowLogout] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  console.log("Is Opened.........", isOpen);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setShowLogout(!showLogout);
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Innovalogo src={companylogo} alt="companylogo" className='innova-logo' />
      <div className="title">
        <Title text="Interview Insights" className="interview-insights-title" />
      </div>
      <div className="round">
        <RoundButton />
        <Expand onClick={toggleExpand}/>
        {isOpen && (
          <div className="expand"  >
            <h5 className="user-name">Prakash Myla</h5>
            <h6 className="user-role">Sr.Software analyst</h6>
            <hr></hr>
            <LogoutIcons className="logouticon" />
            <h6 className="logout">Logout</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
