import React from 'react';
import './CandidateRow.css';
import EditComponent from '../assets/svgs/editImage';
import ShareComponent from '../assets/svgs/shareImage';
// import SaveComponent from '../assets/svgs/reportImage';
import VisibilityComponent from '../assets/svgs/visibilityImage';
// import BlueSaveComponent from '../assets/svgs/blueSave';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/reducers/app/app';
import DownloadIcon from '../assets/svgs/downloadIcon';

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
          {isPdfReport ?
            <DownloadIcon style={{cursor:'pointer'}} fillColor='#196AD6'/> :
            <DownloadIcon style={{cursor:'not-allowed'}}/>}
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
