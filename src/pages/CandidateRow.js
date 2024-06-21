import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/reducers/app/app";
import { GetStoreSkills } from "../store/selector/dashboard/dashboard";
import EditComponent from "../assets/svgs/editImage";
import ShareComponent from "../assets/svgs/shareImage";
import VisibilityComponent from "../assets/svgs/visibilityImage";
import DownloadIcon from "../assets/svgs/downloadIcon";
import { GetUserRole } from "../store/selector/app";
import { DownloadCandidateReport, ShareAssessmentLink } from "../store/reducers/dashboard/dashboard";
import { setAlert } from "../store/reducers/app/app";
import "./CandidateRow.css";

const CandidateRow = ({ candidate , fetchCandidates}) => {
  const dispatch = useDispatch();
  const role = useSelector(GetUserRole);
  const options = useSelector(GetStoreSkills);
  const isStatusNewOrExpired = candidate.status === "New" || candidate.status === "Expired";
  const isStatusCompleted = candidate.status === "Completed";
  const isStatusNewOrExpiredorPending = candidate.status === "New" || candidate.status === "Expired" || candidate.status === "Pending";

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

  const handleReportDownload = (rowCandidateData) => {
    const candidateID = rowCandidateData.candidateId;
    dispatch(DownloadCandidateReport({
      candidateId: candidateID,
      onSuccess: (response) => {
        const blob = new Blob([response], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `assessment_report_${candidateID}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      onError: () => {},
    }));
  };

  const handleShareIcon = (rowCandidateData) =>{
    const candidateID = rowCandidateData.candidateId;
    dispatch(ShareAssessmentLink({
      candidateID,
      onSuccess: (response)=>{
        dispatch(setAlert({ message: response.message, messageType: "success" }));
        fetchCandidates();
      },
      onError:()=>{ },
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
        {candidate.status === "Completed" ? (
          <div>
            {candidate.score}
          </div>
        ) : (
          <div className="score-container">N/A</div>
        )}
      </td>
      <td>
        {candidate.status === "Completed" ? (
          <div className={candidate.assessmentResult ===
        "Pass" ? "exam-pass" : "exam-fail"}>
            {candidate.assessmentResult}
          </div>
        ) : (
          <div className="result-container">N/A</div>
        )}
      </td>
      <td>
        <div className="cd-report">
          <div className="report-text">
            {candidate.status === "Completed" ?
              (
                <span style={{ color: "#196AD6" }}>{candidate.fileUrl}</span>
              ) : (
                <span style={{ color: "#6F7683" }}>No report</span>
              )}
          </div>
          <div
            role="button"
            tabIndex="0"
            onKeyDown={(event,candidate) => {
              if((isStatusCompleted) && (event.key === "Enter" || event.key === " ")){
                handleReportDownload(candidate);
              }
            }}
            onClick={() => isStatusCompleted && handleReportDownload(candidate)}
            style={{ cursor: isStatusCompleted && candidate.fileUrl !== "null" ? "pointer" : "not-allowed" }}
          >
            <DownloadIcon
              fillColor={isStatusCompleted && candidate.fileUrl !== "null" ? "#196AD6" : "#6F7683"}
            />
          </div>
        </div>
      </td>
      <td>
        {candidate.status === "Completed" ? (
          <div className="feedback-container">
            {candidate.rating}
            <VisibilityComponent
              style={{marginLeft: "40px",cursor:"pointer"}}
              onClick={handleOpenModal}/>
            <div
              className="comments-text"
              style={{ marginLeft: "10px" }}
              role="button"
              tabIndex="0"
              onClick={() => handleOpenModal()}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleOpenModal();
                }
              }}
            >
              Comments
            </div>
          </div>
        ) : (
          <div className="feedback-container">N/A</div>
        )}
      </td>
      {role === "HR" && (
        <td className="actions-column">
          <span
            role="button"
            tabIndex="0"
            onClick = {() => isStatusNewOrExpiredorPending && handleEditClick(candidate)}
            onKeyDown={(event) => {
              if(event.key === "Enter" || event.key === " "){
                handleEditClick(candidate);
              }
            }}
          >
            <EditComponent
              className={`edit-icon ${isStatusNewOrExpiredorPending ? "active" : ""}`}
              fillColor={isStatusNewOrExpiredorPending ? "#383838" : "#D0D5DD"} />
          </span>
          <ShareComponent
            className = {`share-icon ${isStatusNewOrExpired ? "active" : ""}`}
            fillColor={isStatusNewOrExpired ? "#383838" : "#D0D5DD"}
            onClick={() => isStatusNewOrExpired && handleShareIcon(candidate)}
          />
        </td>
      )}
    </tr>
  );
};

export default CandidateRow;
