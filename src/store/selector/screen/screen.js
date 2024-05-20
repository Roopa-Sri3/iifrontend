export const GetDuration = (state) => state.screen.duration;

export const GetExamStatus = (state) => state.screen.isRunning;

export const GetIsTimeUp = (state) => state.screen.isTimeUp;

export const selectCurrentQuestion = (state) => state.screen.currentQuestion;

export const getQuestions = (state) => state.screen.questions;

export const getAnswers = (state) => state.screen.answers;

export const getquestionType = (state) => state.screen.questionType;
