import React from "react";
import CandidateRow from "../../../pages/CandidateRow";

const SubLayout = ({filteredCandidates }) => (
  <tbody>
    {filteredCandidates.map((candidate, index) => (
      <CandidateRow key={index}  candidate={candidate}/>
    ))}
  </tbody>
);

export default SubLayout;
