import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../core/button";
import RadioGroup from "../core/radioGroup/RadioGroup";
import { handleSaveAndNext, handlePrevious, updateAnswers, setRefreshData, GetAssessmentRefreshData, setDuration, startExam } from "../../store/reducers/screen/screen";
import { selectCurrentQuestion, getQuestions, getAnswers, getAssessmentId } from "../../store/selector/screen";
import { PostAssessmentAnswers } from "../../store/reducers/screen/screen";
import Loading from "../../pages/Loading";
import "./Question.css";

const Question = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assessment_id = useSelector(getAssessmentId);
  const answers = useSelector(getAnswers);
  const questions = useSelector(getQuestions);
  const totalQuestions = questions.length;
  const presentquestion = useSelector(selectCurrentQuestion);
  const currQuestion = questions && questions[presentquestion];
  const answerForQuestion = answers[presentquestion];
  const savedAnswer = answerForQuestion ? answerForQuestion.optionSelected : "";

  const [selectedOption, setSelectedOption] = useState(null);
  const [codeValue, setCodeValue] = useState("");

  useEffect(() => {
    setSelectedOption(savedAnswer);
  }, [currQuestion, savedAnswer]);

  useEffect(() => {
    const assessmentId = sessionStorage.getItem("assessmentId");
    const candidateId = sessionStorage.getItem("candidateId");
    if (!assessmentId) {
      navigate("/unauthorized");
    } else if (!assessment_id && (assessmentId && candidateId)) {
      dispatch(GetAssessmentRefreshData({
        assessmentId,
        candidateId,
        onSuccess: (response) => {
          dispatch(setRefreshData(response));
          dispatch(startExam());
          dispatch(setDuration(parseInt(response.remainingTime)));
        },
        onError: () => {},
      }));
    }
  }, [assessment_id, dispatch, navigate]);

  const handlePreviousButton = () => {
    dispatch(handlePrevious(presentquestion));
  };

  const handleSaveAndNextButton = () => {
    const action = presentquestion >= questions.length - 1 ? "Save" : "Save & Next";
    const updatedAnswers = [...answers];
    const answerValue = selectedOption ? selectedOption : codeValue || "";
    if (answerValue !== "") {
      updatedAnswers[presentquestion] = {
        questionId: currQuestion.question_id,
        optionSelected: answerValue,
        assessmentId: assessment_id,
      };
    } else {
      updatedAnswers[presentquestion] = null;
    }
    setSelectedOption(null);
    dispatch(updateAnswers(updatedAnswers));
    dispatch(PostAssessmentAnswers({
      data: {...updatedAnswers[presentquestion],action},
      onSuccess: () => {},
      onError: () => {},
    }));
    dispatch(handleSaveAndNext(presentquestion));
  };

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handleCodeChange = (event) => {
    setCodeValue(event.target.value);
  };

  return (
    <>
      {currQuestion && (<div className="questions-container">
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
              groupId={currQuestion.question_id}
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
      </div>)}
      {!currQuestion &&
      <Loading />
      }
    </>
  );
};

export default Question;
