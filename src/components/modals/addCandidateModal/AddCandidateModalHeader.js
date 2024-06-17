import React from "react";
import { useSelector } from "react-redux";
import UserLogo from "../../../assets/svgs/UserLogo";
import CloseLogo from "../../../assets/svgs/CloseLogo";
import { GetModalData } from "../../../store/selector/app";
import "./AddCandidateModalHeader.css";

function AddCandidateModalHeader({onClose}) {
  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  const modelData = useSelector(GetModalData);

  return (
    <div className='add-modal-header'>
      <div className='logo'>
        <UserLogo color={"black"} />
      </div>
      {modelData.mode === "EDIT" ? <b className='title'>Edit Candidate</b> : <b className='title'>Add Candidate</b> }

      <div
        role='button'
        tabIndex='0'
        onClick={handleClose}
        className='close-icon'
        onKeyDown={handleKeyDown}
      >
        <CloseLogo color={"black"} />
      </div>
    </div>
  );
}

export default AddCandidateModalHeader;
