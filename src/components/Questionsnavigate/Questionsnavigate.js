import React from "react";
import Button from "../core/button/button";
import Questionbutton from "../Questionbutton/Questionbutton";
import "./Questionsnavigate.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/reducers/app/app";

function Questionsnavigate() {
  const dispatch = useDispatch();

  const handleSubmit = () =>{
    dispatch(openModal({
      modalName: "ExamSubmitModal",
      modalData: {}
    }));
  };

  return (
    <div className="nav-layout">
      <div className="screen-layout">
        <Questionbutton />
        <Button
          className="submit-assessment-button"
          label="Submit"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Questionsnavigate;
