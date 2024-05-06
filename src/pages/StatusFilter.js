import React, { useState } from 'react';
import './StatusFilter.css';

const StatusFilter = ({ onFilterChange, onClose}) => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const statuses = ['Pending', 'Completed', 'Expired', 'New'];

  const handleCheckboxChange = (status) => {
    setSelectedStatus(status);
    onFilterChange(status);
    onClose();
  };

  return (
    <div className="status-filter-popup">
      {statuses.map((status) => (
        <label key={status} className="status-filter-label">
          <input
            type="checkbox"
            checked={selectedStatus === status}
            onChange={() => handleCheckboxChange(status)}
          />
          {status}
        </label>
      ))}
    </div>
  );
};

export default StatusFilter;
