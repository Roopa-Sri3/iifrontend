/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import UserLogo from '../../assets/svgs/UserLogo';
import CloseLogo from '../../assets/svgs/CloseLogo';
import './AddCandidateModalHeader.css';

function AddCandidateModalHeader({onClose}) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className='add-modal-header'>
      <div className='logo'>
        <UserLogo color={"black"} />
      </div>
      <b className='title'>Add Candidate</b>
      <div role='button'
        onClick={handleClose}
        className='close-icon'>
        <CloseLogo color={"black"} />
      </div>
    </div>
  );
}

export default AddCandidateModalHeader;
