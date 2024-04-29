import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../core/button/button';
import Checkbox from '../../core/checkbox/checkbox';
import { setAlert } from '../../../store/reducers/app/app';
import './AddCandidateModalActions.css';
import { GetModalData } from '../../../store/selector/app';

const AddCandidateModalActions = ({ onSubmit, validateForm }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const storeModalData = useSelector(GetModalData);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAddCandidate = () => {
    const isValid = validateForm();

    if (isValid) {
      onSubmit();

      const message = isChecked ?
        "Candidate added and link shared successfully"
        : "Candidate added successfully";

      dispatch(setAlert({
        message,
        messageType: "success"
      }));
    } else {
      dispatch(setAlert({
        message: "Failed to send",
        messageType: "failure"
      }));
    }
  };

  const isEditMode = storeModalData.mode === 'EDIT';
  const buttonLabel = isEditMode ? 'Save Changes' :
    isChecked ? 'Add Candidate and share Link' : 'Add Candidate';

  return (
    <div>
      {!isEditMode && (
        <Checkbox
          id='mycheckbox'
          label="Share link with candidate"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      )}
      <center className='add-button'>
        <Button
          label={buttonLabel}
          handleClick={handleAddCandidate}
        />
      </center>
    </div>
  );
};

export default AddCandidateModalActions;
