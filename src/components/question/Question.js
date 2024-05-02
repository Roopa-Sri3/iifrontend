import Button from '../core/button';
import './Question.css';

const Question = ({
  questionText,
  options
}) => {

  const handlePrevious = () =>{

  };

  const handleSave = () =>{

  };

  return (
    <div className='questions-container'>
      <div className='question-card'>
        <h4 className='number'>Question 8/15</h4>
        <div className='question'>
          <h6 className='heading'>Answer the Question</h6>
          <div className='question-text'>
            {questionText}
          </div>
          <div className='options'>
            {options}
          </div>
        </div>
        <div className='action-buttons'>
          <Button
            className={'previous-button'}
            label={'Previous'}
            handleClick={handlePrevious} />
          <Button
            className={'save-next'}
            label={'Save & Next'}
            handleClick={handleSave}/>
        </div>
      </div>
    </div>
  );
};

export default Question;
