import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isUseLoggedIn: false,
    userName: '',
    modal:{
      modalName: '',
      modalData: null,
    },
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
    openModal: (state,action) => {
      state.modal.modalName = action.payload.modalName;
      state.modal.modalData = action.payload.modalData;

    },
    closeModal: (state, action) => {
      state.modal.modalName = '';
      state.modal.modalData = null;
    }
  },
});

export default appSlice.reducer;

export const {
  setLogin,
  resetApp,
  setUserName,
  openModal,
  closeModal,
} = appSlice.actions;

