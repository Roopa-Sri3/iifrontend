import React from 'react';
import Button from '../core/button/button';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line max-len
import { getQuestions, selectCurrentQuestion, getAnswers } from '../../store/selector/screen';
// eslint-disable-next-line max-len
import { handleQuestionClick } from '../../store/reducers/screen/screen';
import './Questionbutton.css';

const QuestionButtons = ( ) => {
  const answs = useSelector(getAnswers);
  const questions = useSelector(getQuestions);
  const presentquestion = useSelector(selectCurrentQuestion);
  const totalQuestions = questions.length;
  const dispatch = useDispatch();

  const handlequestionclick = (presentquestion) => {
    dispatch(handleQuestionClick(presentquestion));
  };

  const questionButtons = Array.from({ length: totalQuestions }, (_, i) => (
    <div>
      <Button
        key={i + 1}
        className={`question-button ${
          presentquestion === i + 1 ? 'present' :
            answs.some((a) => a.questionId === i + 1) ? 'saved' : 'unsaved'
        }`}
        handleClick={() => handlequestionclick(i + 1)}
        label={i + 1}
      />
    </div>
  ));

  return (
    <div className='navigation-card'>
      <div className='button-s'>
        {questionButtons}
      </div>
    </div>
  );
};

export default QuestionButtons;
