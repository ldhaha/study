import { UserInfo } from "@/store/storeType";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getUserInfo = (): Promise<UserInfo> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "lindong",
      });
    }, 1000);
  });
export const getUserInfoAction = createAsyncThunk(
  "getUserInfoAction",
  async () => {
    const res = await getUserInfo();
    return res;
  }
);
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    id: undefined,
    name: "",
  },
  reducers: {},
  extraReducers: (build) => {
    build.addCase(
      getUserInfoAction.fulfilled,
      (state: UserInfo, { payload }: any) => {
        state.id = payload.id;
        state.name = payload.name;
      }
    );
  },
});
export default userInfoSlice.reducer;
