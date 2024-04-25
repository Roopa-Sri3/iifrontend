import React from 'react';
import './CandidateRow.css';
import SvgComponent from '../assets/svgs/editImage';
import ShareComponent from '../assets/svgs/shareImage';
import SaveComponent from '../assets/svgs/reportImage';
import VisibilityComponent from '../assets/svgs/visibilityImage';
import BlueSaveComponent from '../assets/svgs/blueSave';

const CandidateRow = ({ candidate }) => {
  const isPdfReport = candidate.report.endsWith('.pdf');

  return (
    <tr>
      <td>{candidate.candidateName}</td>
      <td>{candidate.techSkills}</td>
      <td className={candidate.status ===
        'Completed' ? 'status-completed' : ''}>
        {candidate.status}
      </td>
      <td>
        <div className='cd-report'>
          <div className='report-text'>
            {candidate.report}
          </div>
          {isPdfReport ? <BlueSaveComponent /> : <SaveComponent />}
        </div>
      </td>
      <td>
        <div className='feedback-container'>
          {candidate.feedback}
          <VisibilityComponent style={{marginLeft: '40px'}} onClick={() => {
            alert('Feedback Popup');
          }}/>
          <span className="comments-text"
            style={{ marginLeft: "10px" }}>
            Comments
          </span>
        </div>
      </td>
      <td>
        {candidate.actions}
        <SvgComponent className="icon-spacing"/>
        <ShareComponent/>
      </td>
    </tr>
  );
};

export default CandidateRow;
