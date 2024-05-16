import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/reducers/app/app";
import { GetStoreSkills } from "../store/selector/dashboard/dashboard";
import EditComponent from "../assets/svgs/editImage";
import ShareComponent from "../assets/svgs/shareImage";
import VisibilityComponent from "../assets/svgs/visibilityImage";
import DownloadIcon from "../assets/svgs/downloadIcon";
import "./CandidateRow.css";

const CandidateRow = ({ candidate }) => {
  const dispatch = useDispatch();
  const options = useSelector(GetStoreSkills);
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
      "candidateId": "CAND12359",
      "fullName": "Benjamin Clark",
      "status": "completed",
      "fileUrl": "\nhttp://example.com/reports/benjaminclark.pdf"
      ,
      "rating": 5,
      "comments": "Pioneering research in biotech",
      "email": "benjaminclark@gmail.com",
      "yearsOfExperience": 4,
      "mobileNo": "6309574567",
      "rrNo": "RR1015",
      "primaryTechSkills": "html",
      "secondaryTechSkills": [
        "C++",
        ".net"
      ]
    };

    dispatch(openModal(
      {
        modalName: "AddCandidateModal",
        modalData: {
          mode:"EDIT",
          ...rowCandidateData,
          mobileNumber:rowCandidateData.mobileNo,
          selectedPrimarySkills: [options.find((option) => option.label === rowCandidateData.primaryTechSkills)],
          selectedSecondarySkills: options.filter(
            (option) => rowCandidateData.secondaryTechSkills.length === 0 ? [] : rowCandidateData.secondaryTechSkills.includes(option.label)
          )
        }
      }));
  };

  return (
    <tr className="candidate-row">
      <td>{candidate.candidateName}</td>
      <td>{candidate.techSkills}</td>
      <td className={candidate.status ===
        "Completed" ? "status-completed" : ""}>
        {candidate.status}
      </td>
      <td>
        <div className="cd-report">
          <div className="report-text">
            {candidate.report}
          </div>
          <DownloadIcon
            style={{ cursor: isPdfReport ? "pointer" : "not-allowed" }}
            fillColor={isPdfReport ? "#196AD6" : "#6F7683"}
          />
        </div>
      </td>
      <td>
        <div className="feedback-container">
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
