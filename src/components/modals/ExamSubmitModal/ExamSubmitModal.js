import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../core/modal/Modal";
import Button from "../../core/button";
import { PostAssessmentAnswers, endExam } from "../../../store/reducers/screen/screen";
import { closeModal} from "../../../store/reducers/app/app";
import { IsModalOpen } from "../../../store/selector/app/app";
import { getAssessmentId } from "../../../store/selector/screen";
import "./ExamSubmitModal.css";

const ExamSubmitModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assessment_id = useSelector(getAssessmentId);

  const IsExamSubmitModalOpen = useSelector(
    (state) => IsModalOpen(state, "ExamSubmitModal"),
  );

  const handleNoButton = () =>{
    dispatch(closeModal());
  };

  const handleYesButton = () => {
    const finalAnswers = {
      assessmentId: assessment_id,
      action: "Submit",
    };
    dispatch(PostAssessmentAnswers({
      data: finalAnswers,
      onSuccess: () => {
        dispatch(endExam());
        dispatch(closeModal());
        sessionStorage.removeItem("assessmentId");
        navigate("/candidate/feedback");
      },
      onError: () => {
        console.error("Error submitting assessment");
      },
    }));
  };

  return (
    <Modal
      show={IsExamSubmitModalOpen}
      size='none'
    >
      <center>
        <p className='submit-modal-text'>
          Are you sure you want to submit the test?
        </p>
        <div className='submit-actions'>
          <Button
            className="modal-no-button"
            label="No"
            handleClick={handleNoButton}
          />
          <Button
            className="modal-yes-button"
            label="Yes"
            handleClick={handleYesButton}
          />
        </div>
      </center>
    </Modal>
  );
};

export default ExamSubmitModal;
