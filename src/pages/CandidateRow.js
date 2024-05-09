import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/reducers/app/app';
import EditComponent from '../assets/svgs/editImage';
import ShareComponent from '../assets/svgs/shareImage';
import VisibilityComponent from '../assets/svgs/visibilityImage';
import DownloadIcon from '../assets/svgs/downloadIcon';
import './CandidateRow.css';

const CandidateRow = ({ candidate }) => {
  const dispatch = useDispatch();
  const isPdfReport = candidate.report.endsWith(".pdf");
  const handleOpenModal = () => {
    dispatch(openModal(
      {
        modalName: "FeedbackModal",
        modalData: {
          ...candidate,
        }
      }));
  };
  const handleEditClick = () => {
    const rowCandidateData = {
      ...candidate,
      fullName: "abinash",
      email: "191fa04101@gmail.com",
      mobileNumber:"6309574567",
      yearsOfExperience: 1,
      primaryTechSkill: "Java",
      secondaryTechSkills: ["C", "Python", "PHP"],
      rRNumber: "",
      status: "completed",
      fileUrl: "c::/file",
      rating: 1,
      comments: "dfgf"
    };

    dispatch(openModal(
      {
        modalName: "AddCandidateModal",
        modalData: {
          mode:"EDIT",
          ...rowCandidateData,
          selectedPrimarySkills:[
            {label: rowCandidateData.primaryTechSkill,
              value: rowCandidateData.primaryTechSkill}
          ],
          selectedSecondarySkills:
          rowCandidateData.secondaryTechSkills.map(secondarySkill =>
            ({label: secondarySkill, value: secondarySkill})),
        }
      }));
  };
  return (
    <tr className='candidate-row'>
      <td>{candidate.candidateName}</td>
      <td>{candidate.techSkills}</td>
      <td className={candidate.status ===
        "Completed" ? "status-completed" : ""}>
        {candidate.status}
      </td>
      <td>
        <div className='cd-report'>
          <div className='report-text'>
            {candidate.report}
          </div>
          <DownloadIcon
            style={{ cursor: isPdfReport ? "pointer" : "not-allowed" }}
            fillColor={isPdfReport ? "#196AD6" : "#6F7683"}
          />
        </div>
      </td>
      <td>
        <div className='feedback-container'>
          {candidate.feedback}
          <VisibilityComponent
            style={{marginLeft: "40px",cursor:"pointer"}}
            onClick={handleOpenModal}/>
          <span className="comments-text"
            style={{ marginLeft: "10px" }}>
            Comments
          </span>
        </div>
      </td>
      <td>
        {candidate.actions}
        <span
          className="edit-icon"
          role="button"
          tabIndex="0"
          onClick = {handleEditClick}
          onKeyDown={(event) => {
            if(event.key === "Enter" || event.key === " "){
              handleEditClick();
            }
          }}
        >
          <EditComponent />
        </span>
        <ShareComponent className="share-icon"/>
      </td>
    </tr>
  );
};

export default CandidateRow;
