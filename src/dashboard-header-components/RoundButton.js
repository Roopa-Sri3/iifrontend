import React, { useState } from 'react';
import './RoundButton.css';

const RoundButton = ({ onLogout }) => {
  const [isLogout] = useState(false);

  return (
    <div>
      <button className={`round-button ${isLogout ? 'logout' : ''}`}
        style ={{ cursor: 'pointer' }}>PM
      </button>
    </div>
  );
};

export default RoundButton;
