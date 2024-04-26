import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isUserLoggedIn: false,
    userName: '',
    profileName: '',
    role: '',
    modal:{
      modalName: '',
      modalData: null,
    },
    message : '',
    messageType : '',
    timeoutId: null,
    apiCounter: 0,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isUserLoggedIn = action.payload.isUseLoggedIn;
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
      state.userName = '';
      state.profileName = '';
      state.role = '';
    },
    openModal: (state,action) => {
      state.modal.modalName = action.payload.modalName;
      state.modal.modalData = action.payload.modalData;
    },
    closeModal: (state,action) => {
      state.modal.modalName = '';
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
      state.message = '';
      state.messageType = '';
    },
    setTimeoutId: (state, action) => {
      state.timeoutId = action.payload;
    },
    clearTimeoutId: (state) =>{
      state.timeoutId = null;
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
} = appSlice.actions;

export default appSlice.reducer;
