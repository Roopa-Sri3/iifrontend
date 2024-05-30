import { configureStore } from "@reduxjs/toolkit";
import app from "./reducers/app";
import dashboard from "./reducers/dashboard/dashboard";
import screen from "./reducers/screen";
import candidate from "./reducers/candidate";

export const store = configureStore({
  reducer: {
    app,
    dashboard,
    screen,
    candidate
  }
});

export default store;
