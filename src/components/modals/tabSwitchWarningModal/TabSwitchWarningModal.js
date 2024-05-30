import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../core/modal/Modal";
import Button from "../../core/button/button";
import ModalWarningIcon from "../../../assets/svgs/ModalWarningIcon";
import { closeModal } from "../../../store/reducers/app/app";
import { IsModalOpen } from "../../../store/selector/app/app";
import { GetTabSwitchCount, GetWarningLimit } from "../../../store/selector/screen/screen";
import "./TabSwitchWarningModal.css";

const TabSwitchWarningModal = () => {
  const dispatch = useDispatch();
  const isWarningModalOpen = useSelector((state) => IsModalOpen(state,"TabSwitchWarningModal"));
  const tabSwitchCount = useSelector(GetTabSwitchCount);
  const warningLimit = useSelector(GetWarningLimit);

  const handleClose = () => {
    dispatch(closeModal());
  };

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
        <p className="warning-count">Number of warnings left: ({ warningLimit - tabSwitchCount })</p>
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
