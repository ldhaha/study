import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "../featrues/userInfoSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
  devTools: true,
});

export default store;
