import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDuration, getAssessmentId } from "../../store/selector/screen/screen";
import { PostAssessmentAnswers, endExam, setTimeUp } from "../../store/reducers/screen/screen";
import "./Timer.css";

const Timer = () => {
  const dispatch = useDispatch();
  const [timeRemaining,setTimeRemaining] = useState(useSelector(GetDuration));
  const assessmentId = useSelector(getAssessmentId);
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      if (timeRemaining > 1) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        setTimeRemaining(0);
        clearInterval(timeRef.current);
      }
    }, 1000);

    return () => clearInterval(timeRef.current);
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      dispatch(PostAssessmentAnswers({
        data:{
          assessmentId : assessmentId,
          action : "Time Up",
        },
        onSuccess: () => {
          clearInterval(timeRef.current);
          dispatch(setTimeUp());
          dispatch(endExam());
        },
        onError: () => {
          clearInterval(timeRef.current);
          dispatch(setTimeUp());
          dispatch(endExam());
        }
      }));
    }
  }, [assessmentId, dispatch, timeRemaining]);

  const formatTime = (time) =>{
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={timeRemaining <= 600 ? "timer red" : "timer"}>
      Timer: {formatTime(timeRemaining)} Mins
    </div>
  );
};

export default Timer;
