import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";
const reducer = {
  user,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
