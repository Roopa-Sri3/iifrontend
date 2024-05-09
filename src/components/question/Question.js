import React, { useState } from 'react';
import Button from '../core/button';
import './Question.css';
import RadioGroup from '../core/radioGroup/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line max-len
import { handleSaveAndNext, handlePrevious, updateAnswers } from '../../store/reducers/screen/screen';
// eslint-disable-next-line max-len
import { selectCurrentQuestion, getQuestions, getAnswers } from '../../store/selector/screen';

const Question = () => {
  const answers = useSelector(getAnswers);
  const questions = useSelector(getQuestions);
  const totalQuestions = questions.length;
  const presentquestion = useSelector(selectCurrentQuestion);
  const currQuestion = questions.find((q) => q.questionId === presentquestion);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);
  const [codeValue, setCodeValue] = useState('');

  const handlePreviousButton = (presentquestion) =>{
    dispatch(handlePrevious(presentquestion));
  };

  const handleSaveButton = () => {
    const updatedAnswers = [...answers];
    const answerValue = selectedOption ? selectedOption.value : codeValue || '';
    updatedAnswers[currQuestion.questionId - 1] = {
      questionId: currQuestion.questionId,
      answer: answerValue,
    };
    // updatedAnswers.push({ questionId: currQuestion.questionId,
    //   answer: answerValue });
    console.log(codeValue);
    console.log(updatedAnswers);
    dispatch(updateAnswers(updatedAnswers));
    dispatch(handleSaveAndNext(presentquestion));
  };

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    console.log(optionValue);
  };

  const handleCodeChange = (event) => {
    setCodeValue(event.target.value);
  };

  return (
    <div className='questions-container'>
      <div className='question-card'>
        <h4 className='number'>Question {presentquestion}/{totalQuestions}</h4>
        <div className='question'>
          <h6 className='heading'>Answer the Question</h6>
          <div className='question-text'>
            {currQuestion.questionText}
          </div>
          {currQuestion.questionType === 'single-select' &&
          <div className='sinlge-option'>
            <RadioGroup
              label="Choose answer"
              options={currQuestion.options}
              onChange={handleOptionChange}
              selectedValue={selectedOption}
            />
          </div>
          }
          {currQuestion.questionType === 'coding' &&
            <div className='coding'>
              Write code here
              <textarea
                className='coding-area'
                value={codeValue}
                placeholder='Enter your code here'
                onChange={handleCodeChange}
                rows={10}
                cols={175}
              />
            </div>
          }
        </div>
        <div className='action-buttons'>
          <Button
            className=
              // eslint-disable-next-line max-len
              {presentquestion >= 2 ? 'previous-button' : 'previous-button-hide'}
            label={'Previous'}
            handleClick={() => handlePreviousButton(presentquestion)}
          />
          <Button
            className={'save-next'}
            label={presentquestion >= totalQuestions ? "Save" : "Save & Next"}
            handleClick={handleSaveButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
