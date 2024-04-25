import React, { useState } from 'react';
import './RoundButton.css';

const RoundButton = ({ onLogout }) => {
  const [isLogout, setIsLogout] = useState(false);
  const [showLogoutList, setShowLogoutList] = useState(false);

  const handleClick = () => {
    if (isLogout) {
      onLogout();
    } else {
      setIsLogout(true);
    }
  };
  const handleLogoutListClick = () => {
    setShowLogoutList(false);
  };

  return (
    <div>
      <button className={`round-button ${isLogout ? 'logout' : ''}`}
        style ={{ cursor: 'pointer' }}>PM
      </button>
    </div>
  );
};

export default RoundButton;
