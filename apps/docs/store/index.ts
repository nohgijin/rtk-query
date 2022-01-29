import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { userApi } from "../api/user";
import { versionApi } from "../api/version";
import { createWrapper } from "next-redux-wrapper";

const reducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [versionApi.reducerPath]: versionApi.reducer,
});

const store = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        userApi.middleware,
        versionApi.middleware,
      ]),
  });
export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== "production",
});
