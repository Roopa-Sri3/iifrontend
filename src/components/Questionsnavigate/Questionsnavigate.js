import React, { useState } from 'react';
import "./Questionsnavigate.css";
import Button from '../core/button/button';

function Questionnavigate({ totalQuestions = 15 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [attemptedQuestions, setAttemptedQuestions] = useState(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleQuestionClick = (questionNumber) => {
    setCurrentPage(questionNumber);
    setCurrentQuestion(questionNumber);
  };

  const handleSaveAndNext = (questionNumber) => {
    setCurrentQuestion(questionNumber + 1);
    setCurrentPage(questionNumber + 1);
    setAttemptedQuestions(new Set(attemptedQuestions).add(questionNumber));
  };

  const handleSubmit = () =>{
    prompt("Are you sure you want to submit the exam?");
  };

  const handlePrevious = (questionNumber) => {
    setCurrentQuestion(questionNumber - 1);
    setCurrentPage(questionNumber - 1);
  };

  const questionButtons = Array.from({ length: totalQuestions }, (_, i) => (
    <Button
      id={i + 1}
      className={`question-button ${
        currentPage === i + 1 ? 'selected' :
          attemptedQuestions.has(i + 1) ? 'attempted' : 'unattempted'
      }`}
      handleClick={() => handleQuestionClick(i + 1)}
      label={i + 1}
    />
  ));

  return (
    <div className='screen-layout'>
      <div className='questions-pagination-layout'>
        <div className="question-pagination-bar">
          {questionButtons}
        </div>
      </div>
      {currentQuestion && (
        <div>
          <Button
            className='save-and-next-button'
            handleClick={() => handleSaveAndNext(currentQuestion)}
            label={currentQuestion >= 15 ? "Save" : "Save & Next"}
          />
          <Button
            className={currentQuestion > 1 ? 'previous-button' :
              'hide-previous-button'}
            handleClick={() => handlePrevious(currentQuestion)}
            label="Previous"
          />
        </div>
      )}
      <div>
        <Button
          className="submit-assessment-button"
          label="Submit"
          handleClick={handleSubmit}
        />
      </div>

    </div>
  );
}

export default Questionnavigate;
