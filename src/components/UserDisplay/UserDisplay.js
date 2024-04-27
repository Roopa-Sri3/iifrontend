import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetUserRole } from '../../store/selector/app';
import './UserDisplay.css';

const  UserDisplay = () => {

  const userRole = useSelector(GetUserRole);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/admin/questions_configure');
  };

  return(
    <div className='user-display'>
      <div className='dashboard-user-details'>
        <div>Myla Prakash</div>
        <div>sr. software Engineer</div>
      </div>
      <div className='candidates-count'>
        {userRole === 'ADMIN' ?
          <button className='config-question' onClick={handleNavigate}>
          Bulk Import
          </button> :
          <div>
            <p>Candidates</p>
            <p>Till Date</p>
          </div>}
      </div>
    </div>
  );
};

export default UserDisplay;
