import { useState } from 'react';
import Button from '../core/button';
import './Question.css';

const Question = ({
  questionNumber,
  totalQuestions,
  questionText,
  category,
  handlePrevious,
  handleSave,

}) => {
  const [codeValue, setCodeValue] = useState('');

  const handlePreviousButton = () =>{
    handlePrevious();
  };

  const handleSaveButton = () =>{
    handleSave();
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
          {category === 'MULTISELECT' &&
            <div className='multi-option'>

            </div>
          }
          {category === 'SINGLESELECT' &&
            <div className='sinlge-option'>

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
