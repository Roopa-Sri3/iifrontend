import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../core/button";
import RadioGroup from "../core/radioGroup/RadioGroup";
import { handleSaveAndNext, handlePrevious, updateAnswers } from "../../store/reducers/screen/screen";
import { selectCurrentQuestion, getQuestions, getAnswers } from "../../store/selector/screen";
import "./Question.css";

const Question = () => {
  const dispatch = useDispatch();
  const answers = useSelector(getAnswers);
  const questions = useSelector(getQuestions);
  const totalQuestions = questions.length;
  const presentquestion = useSelector(selectCurrentQuestion);
  const currQuestion = questions.find((question) => question.questionId === presentquestion);
  console.log(currQuestion);
  const answerForQuestion = answers.find((answer) => answer && answer.questionId === currQuestion.questionId);
  const savedAnswer = answerForQuestion ? answerForQuestion.answer : "";

  const [selectedOption, setSelectedOption] = useState(null);
  const [codeValue, setCodeValue] = useState("");

  const handlePreviousButton = (presentquestion) =>{
    dispatch(handlePrevious(presentquestion));
  };

  const handleSaveAndNextButton = (presentquestion) => {
    const updatedAnswers = [...answers];
    const answerValue = selectedOption ? selectedOption : codeValue || "";
    updatedAnswers[currQuestion.questionId - 1] = {
      questionId: currQuestion.questionId,
      answer: answerValue,
    };
    setSelectedOption(null);
    dispatch(updateAnswers(updatedAnswers));
    dispatch(handleSaveAndNext(presentquestion));
  };

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handleCodeChange = (event) => {
    setCodeValue(event.target.value);
  };

  return (
    <div className="questions-container">
      <div className="question-card">
        <h4 className="number">Question {presentquestion}/{totalQuestions}</h4>
        <div className="question">
          <h6 className="heading">Answer the Question</h6>
          <div className="question-text">
            {currQuestion.question}
          </div>
          {!currQuestion.programmingQuestion &&
          <div className="sinlge-option">
            <RadioGroup
              label="Choose answer"
              options={currQuestion.options}
              onChange={handleOptionChange}
              selectedValue={selectedOption || savedAnswer}
            />
          </div>
          }
          {currQuestion.programmingQuestion &&
            <div className="coding">
              Write code here
              <textarea
                className="coding-area"
                value={codeValue}
                placeholder="Enter your code here"
                onChange={handleCodeChange}
                rows={10}
                cols={175}
              />
            </div>
          }
        </div>
        <div className="action-buttons">
          <Button
            className=
              {presentquestion >= 2 ? "previous-button" : "previous-button-hide"}
            label={"Previous"}
            handleClick={() => handlePreviousButton(presentquestion)}
          />
          <Button
            className={"save-next"}
            label={presentquestion >= totalQuestions ? "Save" : "Save & Next"}
            handleClick={() => handleSaveAndNextButton(presentquestion)}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
