import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Questionsnavigate from "../components/Questionsnavigate/Questionsnavigate";
import Question from "../components/question";
import ExamSubmitModal from "../components/modals/ExamSubmitModal";
import TabSwitchWarningModal from "../components/modals/tabSwitchWarningModal/TabSwitchWarningModal";
import { openModal } from "../store/reducers/app/app";
import { endExam, setTimeUp } from "../store/reducers/screen/screen";
import { incrementTabSwitchCount } from "../store/reducers/screen/screen";
import { GetIsTimeUp, GetTabSwitchCount, GetWarningLimit } from "../store/selector/screen/screen";

function Assessmentscreen(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTimeUp = useSelector(GetIsTimeUp);
  const warningLimit = useSelector(GetWarningLimit);
  const tabSwitchCount = useSelector(GetTabSwitchCount);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        dispatch(incrementTabSwitchCount());

        if (tabSwitchCount < warningLimit) {
          dispatch(openModal({ modalName: "TabSwitchWarningModal" }));
        } else {
          //write submit exam logic
          dispatch(endExam());
          dispatch(setTimeUp());
          navigate("/candidate/feedback");
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [tabSwitchCount, dispatch, navigate, warningLimit]);

  useEffect(() => {
    if (isTimeUp) {
      navigate("/candidate/feedback");
    }
  }, [isTimeUp, navigate]);

  return(
    <div className="assess-sreen-layout">
      <div>
        <Questionsnavigate />
      </div>
      <div>
        <Question />
      </div>
      <ExamSubmitModal />
      <TabSwitchWarningModal />
    </div>
  );
}

export default Assessmentscreen;
