import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className='table-head'>
      <thead>
        <tr>
          <th>Candidate Name</th>
          <th>Tech Skills</th>
          <th>Status</th>
          <th>View/Dashboard Report</th>
          <th>Feedback</th>
          <th>Actions  </th>
        </tr>
      </thead>
    </div>
  );
}

export default SubHeader;
