import React, { useEffect } from "react";
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
    const candidateId = "e0b8f691-5e87-4f92-a9f3-a170116d2d0d";
    dispatch(startExam());
    dispatch(setDuration());
    dispatch(GetAssessmentQuestions({
      candidateId,
      onSuccess: () => {
        console.log("Questions fetched successfully");
      },
      onError: () => {
        console.error("Error fetching questions");
      }
    }));
  };

  useEffect(()=>{
    if (examStarted === true){
      navigate("/candidate/assessment-screen");
    }
  },[examStarted, navigate]);

  return (
    <div>
      {(!examStarted) &&
          <Button label="Start Exam" handleClick={handleStartExam} />
      }
    </div>

  );
};

export default Start;
