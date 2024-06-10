import React from "react";
import CandidateRow from "../../../pages/CandidateRow";

const SubLayout = ({filteredCandidates, fetchCandidates }) => (
  <tbody className="table-body">
    {filteredCandidates.map((candidate, index) => (
      <CandidateRow key={index}  candidate={candidate} fetchCandidates={fetchCandidates}/>
    ))}
  </tbody>
);

export default SubLayout;
