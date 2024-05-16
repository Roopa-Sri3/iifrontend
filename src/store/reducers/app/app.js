import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isUserLoggedIn: false,
    userName: "",
    profileName: "",
    role: "",
    modal:{
      modalName: "",
      modalData: null,
    },
    message : "",
    messageType : "",
    timeoutId: null,
    apiCounter: 0,
    assessment:{
      duration: null,
      isTimeUp: null,
      isRunning: null,
    }
  },
  reducers: {
    setLogin: (state, action) => {
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
    setUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    setUserDetails: (state, action) => {
      state.userName = action.payload.userName;
      state.profileName = action.payload.profileName;
      state.role = action.payload.role;
      state.isUserLoggedIn = true;
    },
    resetApp: (state) => {
      state.isUserLoggedIn = false;
      state.userName = "";
      state.profileName = "";
      state.role = "";
    },
    openModal: (state,action) => {
      state.modal.modalName = action.payload.modalName;
      state.modal.modalData = action.payload.modalData;
    },
    closeModal: (state) => {
      state.modal.modalName = "";
      state.modal.modalData = null;
    },
    incrementApiCounter: (state) => {
      state.apiCounter += 1;
    },
    decrementApiCounter: (state) => {
      if (state.apiCounter > 0) {
        state.apiCounter -= 1;
      }
    },
    setAlert: (state, action) => {
      state.message = action.payload.message;
      state.messageType = action.payload.messageType;
    },
    clearAlert: (state,action) => {
      state.message = "";
      state.messageType = "";
    },
    setTimeoutId: (state, action) => {
      state.timeoutId = action.payload;
    },
    clearTimeoutId: (state) =>{
      state.timeoutId = null;
    },
    setDuration: (state) => {
      state.assessment.duration = 1;
      state.assessment.isTimeUp = false;
    },
    setTimeUp: (state) => {
      state.assessment.isTimeUp = true;
      state.assessment.duration = null;
    },
    startExam: (state) => {
      state.assessment.isRunning = true;
    },
    endExam: (state) => {
      state.assessment.isRunning = false;
    },
  },
});

export const {
  setLogin,
  resetApp,
  setUserName,
  setUserDetails,
  openModal,
  closeModal,
  incrementApiCounter,
  decrementApiCounter,
  setAlert,
  clearAlert,
  setTimeoutId,
  clearTimeoutId,
  setDuration,
  setTimeUp,
  startExam,
  endExam,
} = appSlice.actions;

export default appSlice.reducer;
