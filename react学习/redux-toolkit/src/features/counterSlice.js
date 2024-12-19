import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
    name: "lindong",
    age: 20,
  },
  reducers: {
    add_count(state, { payload }) {
      console.log(payload);
      state.count = state.count + payload;
    },
  },
});
export const { add_count } = counterSlice.actions;
export default counterSlice.reducer;
