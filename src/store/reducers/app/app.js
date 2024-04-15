import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isUseLoggedIn: false,
    userName: '',
  },
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
  },
});

export default appSlice.reducer;

export const {
  setLogin,
  resetApp,
  setUserName,
} = appSlice.actions;

