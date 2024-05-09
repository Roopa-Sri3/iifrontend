import React from "react";
import "./SubHeader.css";

const SubHeader = ({ columns, headerActions }) => (
  <thead>
    <tr>
      {columns.map((column, index) => (
        <th key={index} className='candidate-th'>
          {column}
          {headerActions && headerActions[index] && headerActions[index]}
        </th>
      ))}
    </tr>
  </thead>
);
export default SubHeader;
