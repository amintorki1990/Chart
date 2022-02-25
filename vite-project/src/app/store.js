import { configureStore } from "@reduxjs/toolkit";
import chart from "../features/chartSlice";
export const store = configureStore({
  reducer: {
    chart,
  },
});
