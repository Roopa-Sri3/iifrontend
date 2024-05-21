import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../core/button/button";
import { setAlert } from "../../../store/reducers/app/app";
import { GetModalData } from "../../../store/selector/app";
import "./AddCandidateModalActions.css";

const AddCandidateModalActions = ({
  onSubmit,
  validateForm,
  isChecked = false,
}) => {
  const dispatch = useDispatch();
  const storeModalData = useSelector(GetModalData);

  const handleAddCandidate = () => {
    const isValid = validateForm();

    if (isValid) {
      onSubmit();
    } else {
      dispatch(setAlert({
        message: "Failed to send",
        messageType: "failure"
      }));
    }
  };

  const isEditMode = storeModalData.mode === "EDIT";
  const buttonLabel = isEditMode ? "Save Changes" :
    isChecked ? "Add Candidate and share Link" : "Add Candidate";

  return (
    <center className="add-button">
      <Button
        label={buttonLabel}
        handleClick={handleAddCandidate}
        className={"add-candidate-submit-button"}
      />
    </center>
  );
};

export default AddCandidateModalActions;

