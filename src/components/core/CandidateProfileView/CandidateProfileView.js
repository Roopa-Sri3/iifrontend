import React from 'react';
import CallIcon from '../../assets/svgs/CallIcon';
import MailIcon from '../../assets/svgs/MailIcon';
import ExperienceIcon from '../../assets/svgs/ExperienceIcon';
import './CandidateProfileView.css';

function CandidateProfileView() {
  return (
    <div className='Candidate-box'>
      <div className="vertical-line"></div>
      <div className="icon-wrapper">
        <CallIcon />
      </div>
      <div className="icon-wrapper">
        <MailIcon />
      </div>
      <div className="icon-wrapper">
        <ExperienceIcon />
      </div>
    </div>
  );
}

export default CandidateProfileView;
