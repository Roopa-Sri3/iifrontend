import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <button className='config-question'>
        <a className="anchor-tag" href='/questions_configure'>
          Configure Questions</a>
      </button>
    </div>
  );
}

export default Dashboard;
