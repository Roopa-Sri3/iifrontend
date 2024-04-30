import React from 'react';
import { useSelector,} from 'react-redux';
import {GetUserRole, GetProfileName }  from '../../store/selector/app';
import './UserDisplay.css';

const  UserDisplay = () => {
  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);

  return(
    <div className='user-display'>
      <div className='dashboard-line-1'>
        <p>{profileName}</p>
        <p className='candidates-text'>Candidates</p>
      </div>
      <div className='dashboard-line-2'>
        <p>{userRole}</p>
        <p className='registered-till-date'>
          Till Date:</p>
      </div>
    </div>
  );
};

export default UserDisplay;
