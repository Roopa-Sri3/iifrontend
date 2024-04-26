import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <button className='config-question'>
        <Link className='anchor-tag' to="/questions_configure">
          Questions Configuration
        </Link>
      </button>
      Dashboard Page
    </div>
  );
}

export default Dashboard;
