import React, { useState } from 'react';
import Button from '../core/button';
import './Question.css';
import RadioGroup from '../core/radioGroup/RadioGroup';

const Question = ({
  questionNumber,
  totalQuestions,
  questionText,
  category,
  handlePrevious,
  handleSave,
  options = [],
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [codeValue, setCodeValue] = useState('');

  const handlePreviousButton = () =>{
    handlePrevious();
  };

  const handleSaveButton = () =>{
    handleSave();
  };

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handleCodeChange = (event) => {
    setCodeValue(event.target.value);
  };

  return (
    <div className='questions-container'>
      <div className='question-card'>
        <h4 className='number'>Question {questionNumber}/{totalQuestions}</h4>
        <div className='question'>
          <h6 className='heading'>Answer the Question</h6>
          <div className='question-text'>
            {questionText}
          </div>
          {category === 'SINGLESELECT' &&
            <div className='sinlge-option'>
              <RadioGroup
                label="Choose answer"
                options={options}
                onChange={handleOptionChange}
                selectedValue={selectedOption}
              />
            </div>
          }
          {category === 'CODING' &&
            <div className='coding'>
              Write code here
              <textarea
                className='coding-area'
                value={codeValue}
                onChange={handleCodeChange}
                rows={10}
                cols={175}
              />
            </div>
          }
        </div>
        <div className='action-buttons'>
          <Button
            className={'previous-button'}
            label={'Previous'}
            handleClick={handlePreviousButton} />
          <Button
            className={'save-next'}
            label={'Save & Next'}
            handleClick={handleSaveButton}/>
        </div>
      </div>
    </div>
  );
};

export default Question;
