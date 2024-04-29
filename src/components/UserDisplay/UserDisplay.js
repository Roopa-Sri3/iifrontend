import React from 'react';
import { useSelector,} from 'react-redux';
import {GetUserRole, GetProfileName }  from '../../store/selector/app';

import './UserDisplay.css';

const  UserDisplay = () => {
  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);

  return(
    <div className='user-display'>
      <div className='dashboard-user-details'>
        <div>{profileName}</div>
        <div>{userRole}</div>
      </div>
      <div className='candidates-count'>
        <div>Candidates</div>
        <div>Till Date:</div>
      </div>
    </div>
  );
};

export default UserDisplay;
