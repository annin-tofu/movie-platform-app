import { configureStore } from "@reduxjs/toolkit";
//counterSlicer.js has been moved to features folder
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});
