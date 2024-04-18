import React from 'react';

function SubLayout() {
  // Assuming you have data to map through for rows
  const dataRows = []; // Replace with your data array

  return (
    <tbody>
      {dataRows.map((data, index) => (
        <tr key={index}>
          <td>{data.candidateName}</td>
          <td>{data.techSkills}</td>
          <td>{data.status}</td>
          <td>{data.report}</td>
          <td>{data.feedback}</td>
          <td>{/* Actions */}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default SubLayout;
