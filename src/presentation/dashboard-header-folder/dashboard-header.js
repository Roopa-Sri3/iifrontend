import React,{ useState } from 'react';
import companylogo from '../../images/company-symbol.png';
import usericon from '../../images/user-icon.png';
import Logo from '../../dashboard-header-components/Logo';
import Title from '../../dashboard-header-components/Title';
import UserIcon from '../../dashboard-header-components/UserIcon';
import './dashboard-header.css';

const Header = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleUserIconClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="header">
      <Logo src={companylogo} alt="Hal"/>

      <div className="title-container">
        <Title text="Interview Insights"/>
      </div>
      <div className = "user-icon">
        <UserIcon src={usericon} alt="user" onClick={handleUserIconClick} />
      </div>
    </div>
  );
};

export default Header;
