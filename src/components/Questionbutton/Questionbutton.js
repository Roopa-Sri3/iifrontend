import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../core/button/button";
import { getQuestions, selectCurrentQuestion, getAnswers } from "../../store/selector/screen";
import { handleQuestionClick } from "../../store/reducers/screen/screen";
import "./Questionbutton.css";

const QuestionButtons = () => {
  const dispatch = useDispatch();

  const answs = useSelector(getAnswers);
  const questions = useSelector(getQuestions);
  const presentquestion = useSelector(selectCurrentQuestion);

  const handlequestionclick = (presentquestion) => {
    dispatch(handleQuestionClick(presentquestion));
  };

  const questionButtons = questions.map((question,index) => (
    <div key={index}>
      <Button
        className={`question-button ${
          presentquestion === question.questionId ? "present" :
            answs.some((a) => a && a.questionId === question.questionId) ? "saved" : "unsaved"
        }`}
        handleClick={() => handlequestionclick(index)}
        label={index + 1}
      />
    </div>
  ));

  return (
    <div className="navigation-card">
      <div className="button-s">
        {questionButtons}
      </div>
    </div>
  );
};

export default QuestionButtons;
