export const IsAssessmentscreenLoading = (state) => state.screen.isAssessmentscreenLoading;

export const GetDuration = (state) => state.screen.duration;

export const GetExamStatus = (state) => state.screen.isRunning;

export const GetIsTimeUp = (state) => state.screen.isTimeUp;

export const GetTabSwitchCount = (state) => state.screen.tabSwitchCount;

export const GetWarningLimit = (state) => state.screen.warningLimit;

export const selectCurrentQuestion = (state) => state.screen.currentQuestion;

export const getQuestions = (state) =>  state.screen.questions || [];

export const getAssessmentId = (state) => state.screen.assessmentId;

export const getAnswers = (state) => state.screen.answers;

export const getTotalQuestions = (state) => state.screen.questions.length;

export const getquestionType = (state) => state.screen.questionType;
