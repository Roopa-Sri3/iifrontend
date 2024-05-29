import React from "react";
import UserLogo from "../../../assets/svgs/UserLogo";
import CloseLogo from "../../../assets/svgs/CloseLogo";
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

  return (
    <div className='add-modal-header'>
      <div className='logo'>
        <UserLogo color={"black"} />
      </div>
      <b className='title'>Add Candidate</b>
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
