import { configureStore } from "@reduxjs/toolkit";
import costs from "../features/costs/costsSlice";

export const store = configureStore({
  reducer: {
    costs,
  },
});
