import React, { useEffect } from "react";
import Button from "../core/button";
import { useDispatch, useSelector } from "react-redux";
import {
  setDuration,
  startExam
} from "../../store/reducers/screen/screen";
import { GetExamStatus, GetIsTimeUp } from "../../store/selector/screen/screen";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const examStarted = useSelector(GetExamStatus);
  const isTimeUp = useSelector(GetIsTimeUp);

  useEffect(() => {

    if (isTimeUp) {
      navigate("/test-submitted");
    }
  }, [isTimeUp, navigate]);

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
