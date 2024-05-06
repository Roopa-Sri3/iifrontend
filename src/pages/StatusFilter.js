import React, { useState } from 'react';
import './StatusFilter.css';

const StatusFilter = ({ onFilterChange, onClose}) => {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleCheckboxChange = (status) => {
    setSelectedStatus(status);
    onFilterChange(status);
    onClose();
  };

  return (
    <div className="status-filter-popup">
      <label className="status-filter-label">
        <input
          type="checkbox"
          checked={selectedStatus === 'Pending'}
          onChange={() => handleCheckboxChange('Pending')}
        />
        Pending
      </label>
      <label className="status-filter-label">
        <input
          type="checkbox"
          checked={selectedStatus === 'Completed'}
          onChange={() => handleCheckboxChange('Completed')}
        />
        Completed
      </label>
      <label className="status-filter-label">
        <input
          type="checkbox"
          checked={selectedStatus === 'Expired'}
          onChange={() => handleCheckboxChange('Expired')}
        />
        Expired
      </label>
      <label className="status-filter-label">
        <input
          type="checkbox"
          checked={selectedStatus === 'New'}
          onChange={() => handleCheckboxChange('New')}
        />
        New
      </label>
    </div>
  );
};

export default StatusFilter;
