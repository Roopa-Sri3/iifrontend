import React from 'react';
import './SubFooter.css';

const SubFooter =
  ({ currentPage,
    totalPages,
    totalRecords,
    recordsPerPage,
    onPageChange,
    filteredCandidates,
    selectedStatus, }) => {
    const pageNumbers = [];

    let startPage = 1;
    let endPage = totalPages;
    if (totalPages > 5 && currentPage <= 3) {
      endPage = 5;
    } else if (totalPages > 5 && currentPage > 3) {
      startPage = Math.max(currentPage - 2, 1);
      endPage = Math.min(currentPage + 2, totalPages);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    filteredCandidates.filter(candidate => candidate.status === selectedStatus);
    const totalFilteredRecords = filteredCandidates.length;
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = (currentPage - 1) * recordsPerPage;
    const startRecord = Math.max(1, indexOfFirstRecord + 1);
    const endRecord = Math.min(indexOfLastRecord, totalFilteredRecords);

    return (
      <div className="pagination-root">
        <button
          className="page-number-btn"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}>{'<<'}</button>
        <button className="page-number-btn"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}>{'<'}</button>
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`page-number-btn page-button ${
              currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <button className="page-number-btn"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>{'>'}</button>
        )}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <button className="page-number-btn"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}>{'>>'}</button>
        )}
        <div className="current-page-entries">
          Showing {startRecord} to {endRecord} of {totalFilteredRecords} entries
        </div>
      </div>
    );
  };

export default SubFooter;
