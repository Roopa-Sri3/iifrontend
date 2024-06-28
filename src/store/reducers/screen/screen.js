import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const initialState = {
  isAssessmentscreenLoading: false,
  duration: null,
  isTimeUp: null,
  isRunning: null,
  warningLimit: 1,
  tabSwitchCount: 0,
  currentQuestion : 0,
  assessmentId: null,
  questions :[],
  answers: [],
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setDuration: (state, action) => {
      state.duration = action.payload;
      state.isTimeUp = false;
    },
    setTimeUp: (state) => {
      state.isTimeUp = true;
      state.duration = null;
    },
    startExam: (state) => {
      state.isRunning = true;
    },
    endExam: (state) => {
      state.isRunning = false;
    },
    incrementTabSwitchCount: (state) => {
      state.tabSwitchCount += 1;
    },
    setAssessmentData: (state, action) => {
      state.assessmentId = action.payload.assessmentId;
      state.questions = action.payload.questions;
      state.isAssessmentscreenLoading = true;
    },
    setAssessmentScreenLoading: (state, action) => {
      state.isAssessmentscreenLoading = action.payload.isAssessmentscreenLoading;
    },
    setRefreshData: (state, action) => {
      state.isAssessmentscreenLoading = true;
      state.assessmentId = action.payload.assessmentId;
      state.questions = action.payload.questions.map((question) => ({
        question_id: question.question_id,
        question: question.question,
        options: question.options,
        programmingQuestion: question.programmingQuestion,
      }));
      state.answers = action.payload.questions.map((question) => ({
        questionId: question.question_id,
        optionSelected: question.optionSelected !== null ? question.optionSelected : null,
        assessmentId: action.payload.assessmentId,
      }));
      state.duration = action.payload.remainingTime;
      state.warningLimit = action.payload.warningLimit;
      state.isRunning = action.payload.remainingTime > 0 && action.payload.warningLimit >= 0;
    },
    handleQuestionClick: (state, action) => {
      state.currentQuestion = action.payload;
    },
    handleSaveAndNext: (state, action) => {
      if (state.currentQuestion === state.questions.length - 1)
      {
        state.currentQuestion = action.payload;
      }
      else if (state.currentQuestion < state.questions.length){
        state.currentQuestion = action.payload + 1;
      }
    },
    handlePrevious: (state, action) => {
      state.currentQuestion = action.payload - 1;
    },
    updateAnswers: (state, action) => {
      state.answers = action.payload;
    },
  },
});

export const GetAssessmentQuestions = ({
  candidateId,
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  const responseData = await apiWrapper.getAssessmentQuestions({
    candidateId,
    onSuccess,
    onError,
  });
  dispatch(setAssessmentData(responseData));
};

export const PostAssessmentAnswers = ({
  data,
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.postAssessmentAnswers({
    data,
    onSuccess,
    onError,
  });
};

export const GetAssessmentRefreshData = ({
  assessmentId,
  candidateId,
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.getAssessmentRefreshData({
    assessmentId,
    candidateId,
    onSuccess,
    onError,
  });
};

export const PostFeedback = ({
  data,
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.postFeedback({
    data,
    onSuccess,
    onError,
  });
};

export const PostTabSwitchCount = ({
  data,
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.postTabSwitchCount({
    data,
    onSuccess,
    onError,
  });
};

export const {
  setDuration,
  setTimeUp,
  startExam,
  endExam,
  incrementTabSwitchCount,
  setAssessmentData,
  setRefreshData,
  handleQuestionClick,
  handleSaveAndNext,
  handlePrevious,
  updateAnswers,
  setAssessmentScreenLoading,
} = screenSlice.actions;

export default screenSlice.reducer;
