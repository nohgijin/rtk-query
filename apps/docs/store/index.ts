import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { userApi } from "../api/user";
import { createWrapper } from "next-redux-wrapper";

const reducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

const store = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([userApi.middleware]),
  });
export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== "production",
});
