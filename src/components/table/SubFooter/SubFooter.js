import React from "react";
import { useSelector } from "react-redux";
import { GetStoreCandidatesTotalCount } from "../../../store/selector/dashboard/dashboard";
import "./SubFooter.css";

const SubFooter = ({
  currentPage,
  totalPages,
  recordsPerPage,
  onPageChange,
  filteredCandidates,
  selectedStatus,
}) => {
  const pageNumbers = [];
  const totalCandidates = useSelector(GetStoreCandidatesTotalCount);

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

  const indexOfFirstRecord = Math.max(1, ((currentPage - 1) * recordsPerPage) + 1);
  let indexOfLastRecord = Math.min((currentPage * recordsPerPage), totalCandidates);

  if (currentPage === totalPages && totalCandidates % recordsPerPage !== 0) {
    indexOfLastRecord = totalCandidates;
  }

  return (
    <div className="pagination-root">
      {totalCandidates > 0 && (
        <>
          <button
            className="page-number-btn"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}>{"<<"}</button>
          <button
            className="page-number-btn"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}>{"<"}</button>
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`page-number-btn page-button ${
                currentPage === number ? "active" : ""}`}
            >
              {number}
            </button>
          ))}
          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <button
              className="page-number-btn"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}>{">"}
            </button>
          )}
          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <button
              className="page-number-btn"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}>{">>"}</button>
          )}
          <div className="current-page-entries">
            Showing {indexOfFirstRecord} to {indexOfLastRecord} of {totalCandidates} entries
          </div>
        </>
      )}
    </div>
  );
};

export default SubFooter;
