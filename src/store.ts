import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Features/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export type { RootState, AppDispatch };
