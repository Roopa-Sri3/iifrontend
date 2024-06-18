import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../core/modal/Modal";
import Button from "../../core/button/button";
import ModalWarningIcon from "../../../assets/svgs/ModalWarningIcon";
import { closeModal } from "../../../store/reducers/app/app";
import { IsModalOpen } from "../../../store/selector/app/app";
import { GetWarningTimeoutId, getAssessmentId } from "../../../store/selector/screen";
import { PostAssessmentAnswers, clearWarningTimeoutId, endExam, setTimeUp, setWarningTimeoutId } from "../../../store/reducers/screen/screen";
import "./TabSwitchWarningModal.css";

const TabSwitchWarningModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isWarningModalOpen = useSelector((state) => IsModalOpen(state,"TabSwitchWarningModal"));
  const assessmentId = useSelector(getAssessmentId);
  const warningTimeoutId = useSelector(GetWarningTimeoutId);

  const handleClose = () => {
    dispatch(closeModal());
    if (warningTimeoutId) {
      clearTimeout(warningTimeoutId);
      dispatch(clearWarningTimeoutId());
    }
  };

  const handleCloseAndSubmit = useCallback(() => {
    if (warningTimeoutId){
      clearTimeout(warningTimeoutId);
      dispatch(clearWarningTimeoutId());
    }
    dispatch(closeModal());
    if(assessmentId && warningTimeoutId){
      dispatch(PostAssessmentAnswers({
        data:{
          assessmentId : assessmentId,
          action : "Tab Switch Warning Exceeded",
        },
        onSuccess: () => {
          dispatch(endExam());
          dispatch(setTimeUp());
          navigate("/candidate/feedback");
        },
        onError: (error) => {
          console.log(error);
        }
      }));
    }
  }, [dispatch, navigate, assessmentId, warningTimeoutId]);

  useEffect(() => {
    if (isWarningModalOpen) {
      const timeoutId = setTimeout(handleCloseAndSubmit, 30000);
      dispatch(setWarningTimeoutId(timeoutId));
    }else {
      if (warningTimeoutId) {
        clearTimeout(warningTimeoutId);
        dispatch(clearWarningTimeoutId());
      }
    }

    return () => {
      if (warningTimeoutId) {
        clearTimeout(warningTimeoutId);
        dispatch(clearWarningTimeoutId());
      }
    };
  }, [isWarningModalOpen, handleCloseAndSubmit, dispatch, warningTimeoutId]);

  return (
    <Modal
      show={isWarningModalOpen}
      headerClassName="no-padding-header"
      modalHeader={
        <div className="warning-header">
          <div className="warning-header-icon">
            <ModalWarningIcon />
          </div>
        </div>
      }
    >
      <center>
        <p className="warning">
          Warning!
        </p>
        <p className="warning-text">
          Do not switch the tabs, else the exam will be force submitted.
        </p>
        <p>This is your last warning!</p>
        <div className="warning-actions">
          <Button
            className="modal-ok-button"
            label="Back to test"
            handleClick={handleClose}
          />

        </div>
      </center>
    </Modal>
  );
};

export default TabSwitchWarningModal;

