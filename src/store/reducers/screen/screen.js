import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const initialState = {
  duration: null,
  isTimeUp: null,
  isRunning: null,
  currentQuestion : 1,
  // questions: [
  //   {
  //     questionId: 1,
  //     questionText: "What is the capital of France?",
  //     options: [
  //       { label:"Paris", value:"paris"},
  //       { label:"London", value:"london"},
  //       { label:"Berlin", value:"berlin"},
  //       { label:"Madrid", value:"madrid"},],
  //     questionType: "single-select"
  //   },
  //   {
  //     questionId: 2,
  //     questionText: "What is the largest planet in our solar system?",
  //     options: [{ label:"Earth", value:"earth"},
  //       { label:"Mercury", value:"mercury"},
  //       { label:"Saturn", value:"saturn"},
  //       { label:"Jupiter", value:"jupiter"},],
  //     questionType: "single-select",
  //   },
  //   {
  //     questionId: 3,
  //     questionText: "Who is the highest scorer of IPL 2016?",
  //     options: [{ label:"Virat", value:"virat"},
  //       { label:"Gill", value:"gill"},
  //       { label:"Sachin", value:"sachin"},
  //       { label:"Dhoni", value:"dhoni"},],
  //     questionType: "single-select",
  //   },
  //   {
  //     questionId: 4,
  //     questionText: "Write a C program to print first 10 multiples of 2?",
  //     questionType: "coding"
  //   },
  //   {
  //     questionId: 5,
  //     questionText: "Who is the highest scorer of IPL 2016?",
  //     options: [{ label:"Virat", value:"virat"},
  //       { label:"Gill", value:"gill"},
  //       { label:"Sachin", value:"sachin"},
  //       { label:"Dhoni", value:"dhoni"},],
  //     questionType: "single-select",
  //   },
  //   {
  //     questionId: 6,
  //     questionText: "Who is the highest scorer of IPL 2016?",
  //     options: [{ label:"Virat", value:"virat"},
  //       { label:"Gill", value:"gill"},
  //       { label:"Sachin", value:"sachin"},
  //       { label:"Dhoni", value:"dhoni"},],
  //     questionType: "single-select",
  //   },
  // ],
  questions: [],
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
    setQuestions: (state, action) => {
      state.questions = action.payload;
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
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.getAssessmentQuestions({
    onSuccess,
    onError,
  });
};

// export const PostAssessmentAnswers = ({
//   data,
//   onSuccess = () => {},
//   onError = () => {},
// }) => async(dispatch) => {
//   const apiWrapper = new APIWrapper(dispatch);

//   await apiWrapper.postAssessmentAnswers({
//     data,
//     onSuccess,
//     onError,
//   });
// };

export const {
  setDuration,
  setTimeUp,
  startExam,
  endExam,
  setQuestions,
  handleQuestionClick,
  handleSaveAndNext,
  handlePrevious,
  updateAnswers,
} = screenSlice.actions;

export default screenSlice.reducer;
