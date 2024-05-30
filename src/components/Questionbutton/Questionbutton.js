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
  const currQuestion = questions[presentquestion];
  console.log(presentquestion);
  console.log(currQuestion);

  const handlequestionclick = (presentquestion) => {
    dispatch(handleQuestionClick(presentquestion));
  };

  const questionButtons = questions.map((question,index) => (
    <div key={question.question_id}>
      <Button
        className={`question-button ${
          presentquestion === index ? "present" :
            answs.some((a) => a && a.questionId === question.question_id) ? "saved" : "unsaved"
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
