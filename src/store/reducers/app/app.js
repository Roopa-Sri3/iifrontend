import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isUseLoggedIn: false,
  userName: '',
  apiCounter: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isUseLoggedIn = action.payload.isUseLoggedIn;
    },
    setUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    resetApp: (state) => {
      state.isUseLoggedIn = false;
      state.userName = '';
    },
    incrementApiCounter: (state) => {
      state.apiCounter += 1;
    },
    decrementApiCounter: (state) => {
      if (state.apiCounter > 0) {
        state.apiCounter -= 1;
      }
    },
  },
});
export const {
  setLogin,
  resetApp,
  setUserName,
  incrementApiCounter,
  decrementApiCounter,
} = appSlice.actions;

export default appSlice.reducer;
