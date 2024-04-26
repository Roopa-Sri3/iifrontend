import React from 'react';
import CandidateRow from './CandidateRow';
import './SubLayout.css';

const SubLayout = ({ data, uploadIcon }) => {
  return (
    <tbody className='data-row'>
      {data.map((candidate, index) => (
        <CandidateRow key={index} candidate={candidate}
        />
      ))}
    </tbody>
  );
};

export default SubLayout;
