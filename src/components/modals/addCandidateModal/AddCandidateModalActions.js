import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../core/button/button';
import Checkbox from '../../core/checkbox/checkbox';
import { closeModal, setAlert } from '../../../store/reducers/app/app';
import './AddCandidateModalActions.css';

const AddCandidateModalActions = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAddCandidate = () => {
    let message = "";

    if (isChecked) {
      message = "Candidate added and link shared successfully";
    } else {
      message = "Candidate added successfully";
    }

    dispatch(closeModal());
    dispatch(setAlert({
      message,
      messageType: "success"
    }));

    onSubmit();
  };

  return (
    <div>
      <Checkbox
        id='mycheckbox'
        label="Share link with candidate"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <center>
        <Button
          label={isChecked ? 'Add Candidate and share Link' : 'Add Candidate'}
          handleClick={handleAddCandidate}
        />
      </center>
    </div>
  );
};

export default AddCandidateModalActions;

