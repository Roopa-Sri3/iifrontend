import React, { useState } from 'react';
import './RoundButton.css';
import { useSelector } from 'react-redux';
import { GetProfileShortcutName } from '../store/selector/app';

const RoundButton = ({ onLogout }) => {
  const [isLogout] = useState(false);
  const profileShortcut =  useSelector(GetProfileShortcutName);

  return (
    <div>
      <button
        className={`round-button ${isLogout ? 'logout' : ''}`}
        style ={{ cursor: 'pointer' }}
      >
        {profileShortcut}
      </button>
    </div>
  );
};

export default RoundButton;
