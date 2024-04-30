import React from 'react';
import { useSelector, } from 'react-redux';
import { GetUserRole, GetProfileName } from '../../store/selector/app';
import './UserDisplay.css';

const UserDisplay = () => {
  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);

  return (
    <div className='user-display'>
      <div className='user-details-line1 profileName'>
        <div className='right'>{profileName}</div>
        <div className='left'>Candidates</div>
      </div>
      <div className='user-details-line2 roleName'>
        <div className='right'>{userRole}</div>
        <div className='left'>Till Date: 113</div>
      </div>
    </div>
  );
};

export default UserDisplay;
