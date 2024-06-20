import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isUserLoggedIn: false,
    isUserLoading: true,
    userName: "",
    firstName: "",
    lastName: "",
    designation: "",
    role: "",
    candidateTillDate:"",
    modal:{
      modalName: "",
      modalData: null,
    },
    message : "",
    messageType : "",
    timeoutId: null,
    apiCounter: 0,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
    setUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    setIsUserLoading: (state, action) => {
      state.isUserLoading = action.payload.isUserLoading;
    },
    setToken: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
    setUserDetails: (state, action) => {
      const {
        username,
        firstName,
        lastName,
        designation,
        role,
        candidateTillDate,
      } = action.payload;

      state.userName = username;
      state.firstName = firstName;
      state.lastName = lastName;
      state.designation = designation;
      state.role = role;
      state.candidateTillDate = candidateTillDate;
      state.isUserLoggedIn = true;
      state.isUserLoading = false;
    },
    resetApp: (state) => {
      state.isUserLoggedIn = false;
      state.isUserLoading = true;
      state.userName = "";
      state.firstName = "";
      state.lastName = "";
      state.designation = "";
      state.role = "";
      state.candidateTillDate = "";
    },
    openModal: (state, action) => {
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
    clearTimeoutId: (state) => {
      state.timeoutId = null;
    },
    increaseCandidateTillDate: (state) => {
      state.candidateTillDate += 1;
    },
  },
});

export const {
  setLogin,
  resetApp,
  setUserName,
  setIsUserLoading,
  setToken,
  setUserDetails,
  openModal,
  closeModal,
  incrementApiCounter,
  decrementApiCounter,
  setAlert,
  clearAlert,
  setTimeoutId,
  clearTimeoutId,
  increaseCandidateTillDate,
} = appSlice.actions;

export default appSlice.reducer;

export const PostUserCredentials = ({
  data,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.postUserCredentials({
    data,
    onSuccess,
    onError,
  });
};

export const PostToken = ({
  data,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.postToken({
    data,
    onSuccess,
    onError,
  });
};
