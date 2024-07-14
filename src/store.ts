import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Features/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export type { RootState, AppDispatch };
