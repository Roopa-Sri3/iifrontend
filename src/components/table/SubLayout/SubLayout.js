import React from 'react';
import CandidateRow from '../../../pages/CandidateRow';
import './SubLayout.css';

const SubLayout =
({ data, uploadIcon, currentPage, recordsPerPage , filteredCandidates }) => {
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = (currentPage - 1) * recordsPerPage;
  const currentRecords =
  filteredCandidates.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <tbody className='data-row'>
      {currentRecords.map((candidate, index) => (
        <CandidateRow key={index} candidate={candidate} />
      ))}
    </tbody>
  );
};

export default SubLayout;
