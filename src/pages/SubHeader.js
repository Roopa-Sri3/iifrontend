import React from 'react';
import './SubHeader.css';
// import FilterComponent from '../assets/svgs/filterImage';

const SubHeader = ({ columns, headerActions }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>
            {column}
            {headerActions && headerActions[index] && headerActions[index]}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default SubHeader;
