import { configureStore } from "@reduxjs/toolkit";
//counterSlicer.js has been moved to features folder
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
