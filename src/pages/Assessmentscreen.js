import React, { useEffect } from "react";
import Questionsnavigate from "../components/Questionsnavigate/Questionsnavigate";
import Question from "../components/question";
import ExamSubmitModal from "../components/modals/ExamSubmitModal";
import { useSelector } from "react-redux";
import { GetIsTimeUp } from "../store/selector/screen/screen";
import { useNavigate } from "react-router-dom";

function Assessmentscreen(){
  const navigate = useNavigate();
  const isTimeUp = useSelector(GetIsTimeUp);

  useEffect(() => {
    if (isTimeUp) {
      navigate("/test-submitted");
    }
  }, [isTimeUp, navigate]);

  return(
    <div>
      <div>
        <Questionsnavigate />
      </div>
      <div>
        <Question />
      </div>
      <ExamSubmitModal />
    </div>
  );
}

export default Assessmentscreen;

