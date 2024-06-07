import React, { useState, useEffect} from "react";
import { assessmentInstructions } from "../shared/constants";
import "./AssessmentInstructions.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/core/button";
import { GetAssessmentQuestions, setDuration, startExam } from "../store/reducers/screen/screen";
import { GetExamStatus } from "../store/selector/screen";
import { GetCandidateName } from "../store/selector/candidate";
import {VerifyCandidateStatus, setCandidateDetails, setCandidateId, GetTechnicalSkillsForCandidate} from "../store/reducers/candidate/candidate";

const AssessmentInstructions = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const candidateName = useSelector(GetCandidateName);

  const handleConfirmation = () => {
    setIsConfirmed(!isConfirmed);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const examStarted = useSelector(GetExamStatus);
  const candidateId = sessionStorage.getItem("candidateId");

  const handleStartExam = () => {
    dispatch(startExam());
    dispatch(setDuration());
    dispatch(startExam());
    dispatch(setDuration());
    dispatch(GetAssessmentQuestions({
      candidateId,
      onSuccess: () => {
        console.log("Questions fetched successfully");
      },
      onError: () => {
        console.error("Error fetching questions");
      }
    }));
  };

  useEffect(() => {
    if (
      !candidateName
      && candidateId
    ) {
      dispatch(VerifyCandidateStatus({
        candidateId: candidateId,
        onSuccess: (res) => {
          if(res.message === "The link has expired"){
            navigate("/candidate/link-expired");
          }
          else{
            const candidateDetails = res && res.response;
            dispatch(setCandidateId({candidateId}));
            dispatch(setCandidateDetails({
              ...candidateDetails
            }));
            dispatch(GetTechnicalSkillsForCandidate({}));
          }
        },
        onError: (e) => {
          console.log(e.response.data.message);
          navigate("/unauthorized");
        }
      }));
    }
  }, [dispatch, candidateName, navigate, candidateId]);

  return (
    <div className="instructions-container">
      <div className="instructions-card">
        <b className="inst-title">Instructions</b>
        <div className="instructions-box">
          <p className="greeting">Hello <b>{candidateName}</b></p>
          <p className="go-through">
            Go through the instructions before you commence the exam.
          </p>
          <ol className="instructions-page">
            {assessmentInstructions.map((instruction, index) => (
              <li className="list-instructions" key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        <div className="confirm-section">
          <input
            type="checkbox"
            id="confirm-checkbox"
            checked={isConfirmed}
            onChange={handleConfirmation}
            style={{ accentColor: "#4595ff",cursor:"pointer" }}
          />
          <label htmlFor="confirm-checkbox"
            className="checkbox-text">
          I confirm that I have read and understood all the exam instructions
          </label>
        </div>
        {!examStarted ?
          (
            <Button
              label="Start Exam"
              handleClick={handleStartExam}
              disabled={!isConfirmed}
              className={`start-exam-button ${isConfirmed ? "enabled" : ""}`}
            />
          ) : navigate("/candidate/assessment-screen")
        }
      </div>
    </div>
  );
};

export default AssessmentInstructions;
