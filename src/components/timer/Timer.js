import { useDispatch, useSelector } from "react-redux";
import "./Timer.css";
import { GetDuration } from "../../store/selector/app/app";
import { useEffect, useRef, useState } from "react";
import { endExam, setTimeUp } from "../../store/reducers/app/app";

const Timer = (handleTimeUp) => {
  const dispatch = useDispatch();

  const duration = useSelector(GetDuration);
  const [timeRemaining, setTimeRemaining] = useState(duration * 60);
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if(prevTime <= 0){
          //call handle exam submit
          clearInterval(timeRef.current);

          dispatch(setTimeUp());
          dispatch(endExam());
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timeRef.current);
  }, [dispatch]);

  const formatTime = (time) =>{
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    // eslint-disable-next-line max-len
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={timeRemaining <= 600 ? "timer red" : "timer"}>
      Timer: {formatTime(timeRemaining)} Mins
    </div>
  );
};

export default Timer;
