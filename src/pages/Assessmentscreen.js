import React from "react";
import Questionsnavigate from "../components/Questionsnavigate/Questionsnavigate";
import Question from "../components/question";

function Assessmentscreen(){
  return(
    <div>
      <div>
        <Questionsnavigate />
      </div>
      <div>
        <Question />
      </div>
    </div>
  );
}

export default Assessmentscreen;

