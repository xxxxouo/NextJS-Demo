import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export default user.reducer;
