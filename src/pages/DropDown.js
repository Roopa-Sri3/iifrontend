import React from 'react';
const Dropdown = ({ handleStatusFilter }) => {
  const handleStatusChange = (e) => {
    handleStatusFilter(e.target.value);
  };
  return (
    <select onChange={handleStatusChange}>
      <option value="pending">Pending</option>
      <option value="expired">Expired</option>
      <option value="complete">Complete</option>
      <option value="new">New</option>
    </select>
  );
};
export default Dropdown;
