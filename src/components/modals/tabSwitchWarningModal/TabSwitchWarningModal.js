import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../core/modal/Modal";
import Button from "../../core/button/button";
import ModalWarningIcon from "../../../assets/svgs/ModalWarningIcon";
import { closeModal } from "../../../store/reducers/app/app";
import { IsModalOpen } from "../../../store/selector/app/app";
import { endExam, setTimeUp } from "../../../store/reducers/screen/screen";
import "./TabSwitchWarningModal.css";

const TabSwitchWarningModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isWarningModalOpen = useSelector((state) => IsModalOpen(state,"TabSwitchWarningModal"));
  const timerId = useRef(null);

  const handleClose = () => {
    dispatch(closeModal());
    if (timerId.current) {
      clearTimeout(timerId.current);
      timerId.current = null;
    }
  };

  const handleCloseAndSubmit = useCallback(() => {
    dispatch(closeModal());
    dispatch(endExam());
    dispatch(setTimeUp());
    navigate("/candidate/feedback");
  }, [dispatch, navigate]);

  useEffect(() => {
    if (isWarningModalOpen) {
      timerId.current = setTimeout(handleCloseAndSubmit, 30000);
    }
  }, [isWarningModalOpen, handleCloseAndSubmit]);

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

