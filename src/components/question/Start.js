import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../core/button";
import { setDuration, startExam } from "../../store/reducers/screen/screen";
import { GetAssessmentQuestions } from "../../store/reducers/screen/screen";
import { GetExamStatus } from "../../store/selector/screen/screen";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const examStarted = useSelector(GetExamStatus);

  const handleStartExam = () => {
    dispatch(startExam());
    dispatch(setDuration());
    dispatch(GetAssessmentQuestions({
      onSuccess: () => {
        console.log("Questions fetched successfully");
      },
      onError: () => {
        console.error("Error fetching questions");
      }
    }));
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
