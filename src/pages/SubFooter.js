import React from 'react';
import './SubFooter.css';

const SubFooter = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  if (currentPage <= 5) {
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
  } else {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  }
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(1)}
        disabled={currentPage === 1}>{'<<'}</button>
      <button onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>{'<'}</button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`page-button ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>{'>'}</button>
      )}
      {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
        <button onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}>{'>>'}</button>
      )}
    </div>
  );
};

export default SubFooter;
