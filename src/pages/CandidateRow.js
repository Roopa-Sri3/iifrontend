import React from 'react';
import { useDispatch } from 'react-redux';
import EditComponent from '../assets/svgs/editImage';
import ShareComponent from '../assets/svgs/shareImage';
import VisibilityComponent from '../assets/svgs/visibilityImage';
import { openModal } from '../store/reducers/app/app';
import DownloadIcon from '../assets/svgs/downloadIcon';
import './CandidateRow.css';

const CandidateRow = ({ candidate }) => {
  const dispatch = useDispatch();
  const isPdfReport = candidate.report.endsWith('.pdf');
  const handleOpenModal = () => {
    dispatch(openModal(
      {
        modalName: 'FeedbackModal',
        modalData: {
          ...candidate,
        }
      }));
  };

  return (
    <tr className='candidate-row'>
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
          <DownloadIcon
            style={{ cursor: isPdfReport ? 'pointer' : 'not-allowed' }}
            fillColor={isPdfReport ? '#196AD6' : '#6F7683'}
          />
        </div>
      </td>
      <td>
        <div className='feedback-container'>
          {candidate.feedback}
          <VisibilityComponent
            style={{marginLeft: '40px',cursor:'pointer'}}
            onClick={handleOpenModal}/>
          <span className="comments-text"
            style={{ marginLeft: "10px" }}>
            Comments
          </span>
        </div>
      </td>
      <td>
        {candidate.actions}
        <EditComponent className="edit-icon"/>
        <ShareComponent className="share-icon"/>
      </td>
    </tr>
  );
};

export default CandidateRow;
