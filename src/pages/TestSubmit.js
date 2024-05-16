import React from "react";
import CheckCircle from "../components/assets/svgs/CheckCircle";
import Button from "../components/core/button/button";
import "./TestSubmit.css";

const TestSubmit = () => {

  const handleSubmit = () => {

  };

  return (
    <div className='test-submit-container'>
      <center>
        <div  className='submit-msg'>
          <CheckCircle color={"green"} />
          <h5 id='test-submit'>Test Submitted</h5>
          <p id='test-description'>Please Submit your feedback</p>
        </div>

        <div className='feedback-container'>
          <div id='feedback-title'>Feedback</div>
          <div className='feedback-card'>
            <p className='feedback-sub-title'>Overall assessment experience</p>
            Stars
            <p className='feedback-sub-title'>Any Comments</p>
            <textarea
              className='feedback-textarea'
              placeholder="Write your comments here..."
              rows={5}
              cols={93}
              // value={}
            />
            <div id='feedback-submit'>
              <Button
                label='Submit Feedback'
                handleClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default TestSubmit;
