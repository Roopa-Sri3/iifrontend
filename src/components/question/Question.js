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
  console.log(questions);
  const totalQuestions = questions.length;
  const presentquestion = useSelector(selectCurrentQuestion);
  console.log(presentquestion);
  const currQuestion = questions[presentquestion];
  console.log(currQuestion);
  const answerForQuestion = answers[presentquestion];
  const savedAnswer = answerForQuestion ? answerForQuestion.answer : "";

  const [selectedOption, setSelectedOption] = useState(null);
  const [codeValue, setCodeValue] = useState("");

  const handlePreviousButton = () => {
    dispatch(handlePrevious());
  };

  const handleSaveAndNextButton = () => {
    const updatedAnswers = [...answers];
    const answerValue = selectedOption ? selectedOption : codeValue || "";
    updatedAnswers[presentquestion] = {
      questionId: currQuestion.questionId,
      answer: answerValue,
    };
    setSelectedOption(null);
    dispatch(updateAnswers(updatedAnswers));
    dispatch(handleSaveAndNext());
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
        <h4 className="number">Question {presentquestion + 1}/{totalQuestions}</h4>
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
            className={presentquestion > 0 ? "previous-button" : "previous-button-hide"}
            label={"Previous"}
            handleClick={handlePreviousButton}
          />
          <Button
            className={"save-next"}
            label={presentquestion >= totalQuestions - 1 ? "Save" : "Save & Next"}
            handleClick={handleSaveAndNextButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
