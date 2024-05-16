import React, { useEffect } from "react";
import Question from "./Question";
import Button from "../core/button";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  setDuration,
  startExam
} from "../../store/reducers/app/app";
import ExamSubmitModal from "../modals/ExamSubmitModal";
import { GetExamStatus, GetIsTimeUp } from "../../store/selector/app";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const examStarted = useSelector(GetExamStatus);
  const isTimeUp = useSelector(GetIsTimeUp);

  useEffect(() => {
    console.log("isTimeUp : ",isTimeUp);

    if (isTimeUp) {
      navigate("/test-submitted");
    }
  }, [isTimeUp, navigate]);

  const handleStartExam = () => {
    dispatch(startExam());
    dispatch(setDuration());
  };

  const handleExamSubmit = () => {
    dispatch(openModal({
      modalName: "ExamSubmitModal",
      modalData: {
      }
    }));

  };

  return (
    <div>
      <ExamSubmitModal />
      {examStarted &&
        <Button label='Submit' handleClick={handleExamSubmit} />
      }
      {!examStarted ? (
        <Button label="Start Exam" handleClick={handleStartExam} />
      ) : (
        <Question
          questionNumber={1}
          totalQuestions={10}
          questionText="Your question text goes here"
          category="SINGLESELECT"
          options={[
            {label: "Gobal", value: "global"},
            {label: "Volatile", value: "volatile"},
            {label: "Terrain", value: "terrain"},
          ]}
        />
      )}
    </div>

  );
};

export default Start;
