import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    setUserInfo(state, { payload }) {
      state = payload;
    },
  },
});
export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
