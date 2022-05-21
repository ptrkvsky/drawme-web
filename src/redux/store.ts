import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import appReducer from "../features/app/slices/appSlice";
import projectReducer from "../features/project/slices/projectSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    project: projectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths in the state
        ignoredPaths: ["app.smoothScroll"],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;
