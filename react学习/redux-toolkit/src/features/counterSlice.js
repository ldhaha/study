import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(888);
    }, 2000);
  });
};
export const fetchDataAction = createAsyncThunk("counter/getdata", async () => {
  const res = await fetchData();
  return res;
});
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
    name: "lindong",
    age: 20,
  },
  reducers: {
    add_count(state, { payload }) {
      state.count = state.count + payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataAction.fulfilled, (state, action) => {
      state.count = action.payload;
    });
  },
});
export const { add_count } = counterSlice.actions;
export default counterSlice.reducer;
