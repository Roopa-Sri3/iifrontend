import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/admin/questions_configure');
  };

  return (
    <div>
      Dashboard<br />
      <button className='config-question' onClick={handleNavigate}>
          Bulk Import
      </button>
    </div>
  );
}

export default Dashboard;
