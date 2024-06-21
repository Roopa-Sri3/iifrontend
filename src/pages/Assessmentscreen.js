import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useBlocker } from "react-router-dom";
import Questionsnavigate from "../components/Questionsnavigate/Questionsnavigate";
import Question from "../components/question";
import ExamSubmitModal from "../components/modals/ExamSubmitModal";
import TabSwitchWarningModal from "../components/modals/tabSwitchWarningModal/TabSwitchWarningModal";
import { closeModal, openModal } from "../store/reducers/app/app";
import { PostAssessmentAnswers, PostTabSwitchCount, clearWarningTimeoutId, endExam, setTimeUp } from "../store/reducers/screen/screen";
import { incrementTabSwitchCount } from "../store/reducers/screen/screen";
import { GetIsTimeUp, GetTabSwitchCount, GetWarningLimit, getAssessmentId } from "../store/selector/screen/screen";
import { GetCandidateId } from "../store/selector/candidate/candidate";

function Assessmentscreen(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isTimeUp = useSelector(GetIsTimeUp);
  const warningLimit = useSelector(GetWarningLimit);
  const tabSwitchCount = useSelector(GetTabSwitchCount);
  const assessmentId = useSelector(getAssessmentId);
  const candidateId = useSelector(GetCandidateId);

  const blocker = useBlocker(
    (tx) =>{
      if (assessmentId !== null &&
      location.pathname !== tx.nextLocation.pathname){
        return "Are you sure?";
      }
      return false;
    }
  );

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
          dispatch(clearWarningTimeoutId());
          dispatch(closeModal());
          dispatch(PostAssessmentAnswers({
            data:{
              assessmentId : assessmentId,
              action : "Tab Switch Warning Exceeded",
            },
            onSuccess: () => {
              dispatch(endExam());
              dispatch(setTimeUp());
              sessionStorage.removeItem("assessmentId");
              navigate("/candidate/feedback");
            },
            onError: () => {
              dispatch(endExam());
              dispatch(setTimeUp());
              sessionStorage.removeItem("assessmentId");
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
      sessionStorage.removeItem("assessmentId");
      navigate("/candidate/feedback");
    }
  }, [isTimeUp, navigate, dispatch]);

  useLayoutEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.onbeforeunload = handleBeforeUnload;
    window.addEventListener("unload", function() {
      handleConfirmLeave();
    });
    return () => {
      window.onbeforeunload = null;
    };
  },);

  const handleConfirmLeave = () => {
    dispatch(PostAssessmentAnswers({
      data: {
        assessmentId: assessmentId,
        action: "User Closed Browser",
      },
      onSuccess: () => {
        dispatch(endExam());
        dispatch(setTimeUp());
      },
      onError: () => {
      }
    }));
  };

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
      {blocker.state === "blocked" ? (
        <></>
      ) : null}
    </div>
  );
}

export default Assessmentscreen;
