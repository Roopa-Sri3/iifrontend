import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <button className='config-question'>
        <Link className='anchor-tag' to="/admin/questions_configure">
          Questions Configuration
        </Link>
      </button>
      Dashboard Page
    </div>
  );
}

export default Dashboard;
