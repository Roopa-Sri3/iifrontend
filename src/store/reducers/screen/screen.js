import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const initialState = {
  duration: null,
  isTimeUp: null,
  isRunning: null,
  currentQuestion : 1,
  assessmentId: null,
  questions :[],
  answers: [],
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setDuration: (state) => {
      state.duration = 1;
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
    setAssessmentData: (state, action) => {
      state.assessmentId = action.payload.assessmentId;
      state.questions = action.payload.questions;
    },
    handleQuestionClick: (state, action) => {
      state.currentQuestion = action.payload;
    },
    handleSaveAndNext: (state, action) => {
      if (state.currentQuestion === state.questions.length)
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
  console.log(responseData);
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

export const {
  setDuration,
  setTimeUp,
  startExam,
  endExam,
  setAssessmentData,
  handleQuestionClick,
  handleSaveAndNext,
  handlePrevious,
  updateAnswers,
} = screenSlice.actions;

export default screenSlice.reducer;
