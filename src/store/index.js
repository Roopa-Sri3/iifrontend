import { configureStore } from '@reduxjs/toolkit';
import dashboard from './reducers/dashboard/dashboard';
import { configureStore } from "@reduxjs/toolkit";
import app from "./reducers/app";
import screen from "./reducers/screen";

export const store = configureStore({
  reducer: {
    app,
    dashboard,
    screen
  }
});

export default store;
