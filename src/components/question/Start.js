import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../core/button";
import { setDuration, startExam } from "../../store/reducers/screen/screen";
import { GetExamStatus } from "../../store/selector/screen/screen";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const examStarted = useSelector(GetExamStatus);

  const handleStartExam = () => {
    dispatch(startExam());
    dispatch(setDuration());
  };

  return (
    <div>
      {!examStarted ?
        (
          <Button label="Start Exam" handleClick={handleStartExam} />
        ) : navigate("/candidate/assessment-screen")
      }
    </div>

  );
};

export default Start;
