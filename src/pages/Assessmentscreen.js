import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useBlocker } from "react-router-dom";
import Questionsnavigate from "../components/Questionsnavigate/Questionsnavigate";
import Question from "../components/question";
import ExamSubmitModal from "../components/modals/ExamSubmitModal";
import TabSwitchWarningModal from "../components/modals/tabSwitchWarningModal/TabSwitchWarningModal";
import { closeModal, openModal } from "../store/reducers/app/app";
import { PostAssessmentAnswers, PostTabSwitchCount, endExam, setTimeUp } from "../store/reducers/screen/screen";
import { incrementTabSwitchCount } from "../store/reducers/screen/screen";
import { GetIsTimeUp, GetTabSwitchCount, GetWarningLimit } from "../store/selector/screen/screen";
import { GetCandidateId } from "../store/selector/candidate/candidate";
import { IsModalOpen } from "../store/selector/app/app";

function Assessmentscreen(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isTimeUp = useSelector(GetIsTimeUp);
  const warningLimit = useSelector(GetWarningLimit);
  const tabSwitchCount = useSelector(GetTabSwitchCount);
  const assessmentId = sessionStorage.getItem("assessmentId");
  const candidateId = useSelector(GetCandidateId);
  const isWarningModalOpen = useSelector((state) => IsModalOpen(state, "TabSwitchWarningModal"));
  const hasConfirmedLeaveRef = useRef(false);

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
          dispatch(closeModal());
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [assessmentId, dispatch, navigate, tabSwitchCount, warningLimit, candidateId, isWarningModalOpen]);

  useEffect(() => {
    if (isTimeUp) {
      sessionStorage.removeItem("assessmentId");
      navigate("/candidate/feedback");
    }
  }, [isTimeUp, navigate, dispatch]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    const handleConfirmLeave = () => {
      if (!hasConfirmedLeaveRef.current) {
        hasConfirmedLeaveRef.current = true;
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
      }
    };

    window.onbeforeunload = handleBeforeUnload;
    window.addEventListener("unload", handleConfirmLeave);

    return () => {
      window.onbeforeunload = null;
      window.removeEventListener("unload", handleConfirmLeave);
    };
  }, [assessmentId, dispatch]);

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
