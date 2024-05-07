import React, { useState } from 'react';
import './StatusFilter.css';

const StatusFilter = ({ onFilterChange, onClose, selectedStatus}) => {
  const [localSelectedStatus,setLocalSelectedStatus] = useState(selectedStatus);
  const statuses = ['Pending', 'Completed', 'Expired', 'New'];

  const handleCheckboxChange = (status) => {
    const newSelectedStatus = localSelectedStatus === status ? null : status;
    setLocalSelectedStatus(newSelectedStatus);
    onFilterChange(newSelectedStatus);
    onClose();
  };

  return (
    <div className="status-filter-popup">
      {statuses.map((status) => (
        <label key={status} className="status-filter-label">
          <input className='status-checkbox'
            type="checkbox"
            checked={localSelectedStatus === status}
            onChange={() => handleCheckboxChange(status)}
          />
          {status}
        </label>
      ))}
    </div>
  );
};

export default StatusFilter;
