/* eslint-disable max-len */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentQuestion : 1,
  questions: [
    {
      questionId: 1,
      questionText: "What is the capital of France?",
      options: [
        { label:"Paris", value:"paris"},
        { label:"London", value:"london"},
        { label:"Berlin", value:"berlin"},
        { label:"Madrid", value:"madrid"},],
      questionType: "single-select"
    },
    {
      questionId: 2,
      questionText: "What is the largest planet in our solar system?",
      options: [{ label:"Earth", value:"Earth"},
        { label:"Mercury", value:"mercury"},
        { label:"Saturn", value:"saturn"},
        { label:"Jupiter", value:"jupiter"},],
      questionType: "single-select",
    },
    {
      questionId: 3,
      questionText: "Who is the highest scorer of IPL 2016?",
      options: [{ label:"Virat", value:"virat"},
        { label:"Gill", value:"gill"},
        { label:"Sachin", value:"sachin"},
        { label:"Dhoni", value:"dhoni"},],
      questionType: "single-select",
    },
    {
      questionId: 4,
      questionText: "Write a C program to print first 10 multiples of 2?",
      questionType: "coding"
    },
  ],
  answers: [],
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    handleQuestionClick: (state, action) => {
      state.currentQuestion = action.payload;
      console.log(action,"action");
    },
    handleSaveAndNext: (state, action) => {
      state.currentQuestion = action.payload + 1;
      console.log(action,"action");
    },
    handlePrevious: (state, action) => {
      state.currentQuestion = action.payload - 1;
      console.log(action,"action");
    },
    updateAnswers: (state, action) => {
      state.answers = action.payload;
      console.log(action,"action");
    },
  },
});

export const { handleQuestionClick, handleSaveAndNext, handlePrevious , updateAnswers} = screenSlice.actions;

export default screenSlice.reducer;
