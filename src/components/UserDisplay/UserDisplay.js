import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetUserRole } from '../../store/selector/app';
import './UserDisplay.css';

const  UserDisplay = () => {

  const userRole = useSelector(GetUserRole);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/admin/questions-configure');
  };

  return(
    <div className='user-display'>
      <div className='dashboard-user-details'>
        <div>Myla Prakash</div>
        <div>sr. software Engineer</div>
      </div>
      <div>
        {(userRole === 'ADMIN') && (
          <button className='config-question' onClick={handleNavigate}>
            Import Questions
          </button>
        )}
        {(userRole === 'HR') && (
          <div className='candidates-count'>
            <div>Candidates</div>
            <div>Till Date</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDisplay;
