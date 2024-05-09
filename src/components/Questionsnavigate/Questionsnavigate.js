import React from 'react';
import "./Questionsnavigate.css";
import Button from '../core/button/button';
import Questionbutton from '../Questionbutton/Questionbutton';

function Questionsnavigate() {
  const handleSubmit = () =>{
    prompt("Are you sure you want to submit the exam?");
  };

  return (
    <div className='nav-layout'>
      <div className='screen-layout'>
        <Questionbutton />
        <Button
          className="submit-assessment-button"
          label="Submit"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Questionsnavigate;
