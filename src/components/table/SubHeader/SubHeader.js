import React from "react";
import "./SubHeader.css";

const SubHeader = ({ columns, headerActions }) => (
  <thead className="table-heading">
    <tr>
      {columns.map((column, index) => (
        <th key={index} className='candidate-th'>
          <div className="th-section-with-filter">
            {column}
            {headerActions && headerActions[index] && headerActions[index]}
          </div>
        </th>
      ))}
    </tr>
  </thead>
);
export default SubHeader;
