import React, { useState, useEffect, useRef } from 'react';
import { statuses } from '../shared/constants';
import './StatusFilter.css';

const StatusFilter = ({ onFilterChange, onClose, selectedStatus }) => {
  const [selectedStatuses, setSelectedStatuses] =
  useState(selectedStatus ? [selectedStatus] : []);

  const handleCheckboxChange = (status) => {
    const updatedStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter((s) => s !== status)
      : [...selectedStatuses, status];
    setSelectedStatuses(updatedStatuses);
  };

  const handleOutsideClick = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const filterRef = useRef(null);

  return (
    <div className="status-filter-popup">
      {statuses.map((status) => (
        <label key={status} className="status-filter-label">
          <input className='status-checkbox'
            type="checkbox"
            checked={selectedStatuses.includes(status)}
            onChange={() => handleCheckboxChange(status)}
          />
          {status}
        </label>
      ))}
    </div>
  );
};

export default StatusFilter;
