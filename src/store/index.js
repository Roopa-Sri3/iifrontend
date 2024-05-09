
import { configureStore } from '@reduxjs/toolkit';
import app from './reducers/app';
import dashboard from './reducers/dashboard/dashboard';

export const store = configureStore({
  reducer: {
    app,
    dashboard,
  }
});

export default store;
