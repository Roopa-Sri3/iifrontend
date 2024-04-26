import React from 'react';
import './UserDisplay.css';

const  UserDisplay = () => {
  return(
    <div className='user-display'>
      <div className='dashboard-user-details'>
        <div>Myla Prakash</div>
        <div>sr. software Engineer</div>
      </div>
      <div className='candidates-count'>
        <div>Candidates</div>
        <div>Till Date</div>
      </div>
    </div>
  );
};

export default UserDisplay;
