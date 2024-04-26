/* eslint-disable max-len */
import React, { useState } from 'react';
import companylogo from '../../images/company-symbol.png';
import Innovalogo from '../../dashboard-header-components/Logo';
import Title from '../../dashboard-header-components/Title';
import RoundButton from '../../dashboard-header-components/RoundButton';
import './dashboard-header.css';
import Expand from '../../components/core/assets/svgs/Expand';
import LogoutIcons from '../../components/core/assets/svgs/LougoutIcons';
import { userData } from '../../shared/constants';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLogout, setShowLogout] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(userData[0]);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setShowLogout(!showLogout);
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Innovalogo src={companylogo} alt="companylogo" className='innova-logo' />
      {isLoggedIn && (
        <>
          <div className="title">
            <Title text="Interview Insights" className="interview-insights-title" />
          </div>
          <div className="round">
            <RoundButton />
            <Expand onClick={toggleExpand} className="expand-icon"/>
            {isOpen && (
              <div className="expand-div"  >
                <h6 className="user-name">{currentUser.userName}</h6>
                <h6 className="user-role">{currentUser.userRole}</h6>
                <hr></hr>
                <LogoutIcons className="logout-icon" />
                <h6 className="logout">Logout</h6>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
