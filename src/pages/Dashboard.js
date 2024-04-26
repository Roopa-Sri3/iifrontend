import React from 'react';
import UserDisplay from '../components/UserDisplay/UserDisplay';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <UserDisplay />
      <button className='config-question'>
        <Link className='anchor-tag' to="/admin/questions_configure">
          Questions Configuration
        </Link>
      </button>
    </div>
  );
}

export default Dashboard;
