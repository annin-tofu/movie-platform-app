// what is userSlice?
// global store: instead of having huge global store, where you dont know where everything sits, you can have slices of the store like an Onion (every single slices contains different parts of differecnt sections of information)>>> in this case, imagine you have "user" section and also "basket" section in two different store(slices) (instead of chucking everything in global store)

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; //takes state, and modifies user
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user; //SELECTORS: selectors are essentially how you access.user  // if you push into global store, for example, "user" store. you push information using "action". but how do you use it inside of your component? if you get a piece of infomation our of the "user" store. then all you need to do is basically create "selector". 03013800

export default userSlice.reducer;
