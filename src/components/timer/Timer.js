import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDuration } from "../../store/selector/screen/screen";
import { endExam, setTimeUp } from "../../store/reducers/screen/screen";
import "./Timer.css";

const Timer = () => {
  const dispatch = useDispatch();

  const duration = useSelector(GetDuration);
  const [timeRemaining, setTimeRemaining] = useState(duration * 60);
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timeRef.current);
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timeRef.current);
      dispatch(setTimeUp());
      dispatch(endExam());
    }
  }, [dispatch, timeRemaining]);

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
