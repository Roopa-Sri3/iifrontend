import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Questionsnavigate from "../components/Questionsnavigate/Questionsnavigate";
import Question from "../components/question";
import ExamSubmitModal from "../components/modals/ExamSubmitModal";
import TabSwitchWarningModal from "../components/modals/tabSwitchWarningModal/TabSwitchWarningModal";
import { openModal } from "../store/reducers/app/app";
import { PostAssessmentAnswers, PostTabSwitchCount, endExam, setTimeUp } from "../store/reducers/screen/screen";
import { incrementTabSwitchCount } from "../store/reducers/screen/screen";
import { GetIsTimeUp, GetTabSwitchCount, GetWarningLimit, getAssessmentId } from "../store/selector/screen/screen";
import { GetCandidateId } from "../store/selector/candidate/candidate";

function Assessmentscreen(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTimeUp = useSelector(GetIsTimeUp);
  const warningLimit = useSelector(GetWarningLimit);
  const tabSwitchCount = useSelector(GetTabSwitchCount);
  const assessmentId = useSelector(getAssessmentId);
  const candidateId = useSelector(GetCandidateId);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        dispatch(incrementTabSwitchCount());

        if (tabSwitchCount < warningLimit) {
          dispatch(PostTabSwitchCount({
            data:{
              assessmentId,
              candidateId,
              tabSwitchCount: warningLimit - 1,
            },
            onSuccess: () => {
              dispatch(openModal({ modalName: "TabSwitchWarningModal" }));
            },
            onError: () => { }
          }));

        } else {
          dispatch(PostAssessmentAnswers({
            data:{
              assessmentId : assessmentId,
              action : "Tab Switch Warning Exceeded",
            },
            onSuccess: () => {
              dispatch(endExam());
              dispatch(setTimeUp());
              navigate("/candidate/feedback");
            },
            onError: () => {
              dispatch(endExam());
              dispatch(setTimeUp());
              navigate("/candidate/feedback");
            }
          }));
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [assessmentId, dispatch, navigate, tabSwitchCount, warningLimit, candidateId]);

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
