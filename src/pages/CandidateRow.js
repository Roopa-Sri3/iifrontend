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
  // const isPdfReport = candidate.report.endsWith(".pdf");
  const handleOpenModal = () => {
    dispatch(openModal(
      {
        modalName: "FeedbackModal",
        modalData: {
          ...candidate,
        }
      }));
  };
  const handleEditClick = (rowCandidateData) => {
    dispatch(openModal(
      {
        modalName: "AddCandidateModal",
        modalData: {
          mode:"EDIT",
          ...rowCandidateData,
          mobileNumber:rowCandidateData.mobileNo,
          selectedPrimarySkills: [options.find((option) => option.label === rowCandidateData.primaryTechSkills)], // TODO : Need to chaneg after API Update
          selectedSecondarySkills: rowCandidateData.secondaryTechSkills.length === 0
            ? []
            : options.filter(
              (option) => rowCandidateData.secondaryTechSkills.includes(option.label) // TODO : Need to chaneg after API Update
            )
        }
      }));
  };

  return (
    <tr className="candidate-row">
      <td>{candidate.fullName}</td>
      <td>{candidate.primaryTechSkills}
        {candidate.secondaryTechSkills.length > 0 && (
          <span>
            , {candidate.secondaryTechSkills.join(", ")}
          </span>
        )}
      </td>
      <td className={candidate.status ===
        "Completed" ? "status-completed" : ""}>
        {candidate.status}
      </td>
      <td>
        <div className="cd-report">
          <div className="report-text">
            {candidate.status === "Completed" ? candidate.fileUrl : "No report"}
          </div>
          <DownloadIcon
            style={{ cursor: candidate.fileUrl !== "null" ? "pointer" : "not-allowed" }}
            fillColor={candidate.fileUrl !== "null" ? "#196AD6" : "#6F7683"}
          />
        </div>
      </td>
      <td>
        {candidate.status === "Completed" ? (
          <div className="feedback-container">
            {candidate.rating}
            <VisibilityComponent
              style={{marginLeft: "40px",cursor:"pointer"}}
              onClick={handleOpenModal}/>
            <span className="comments-text"
              style={{ marginLeft: "10px" }}>
            Comments
            </span>
          </div>
        ) : (
          <div className="feedback-container">N/A</div>
        )}
      </td>
      <td>
        {candidate.actions}
        <span
          className="edit-icon"
          role="button"
          tabIndex="0"
          onClick = {() => handleEditClick(candidate)}
          onKeyDown={(event) => {
            if(event.key === "Enter" || event.key === " "){
              handleEditClick(candidate);
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
