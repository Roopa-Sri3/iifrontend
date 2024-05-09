import { configureStore } from '@reduxjs/toolkit';
import app from './reducers/app';
import screen from './reducers/screen';

export const store = configureStore({
  reducer: {
    app, screen
  }
});

export default store;
