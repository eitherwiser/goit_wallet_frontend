import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  authUser,
  loginUser,
  logOut,
  fetchCurrentUser,
} from "./auth-operations";

const initialUserState = {
  data: { userName: null, email: null, balance: null },
  token: null,
};
const user = createReducer(initialUserState, {
  [authUser.fulfilled]: (_, { payload }) => payload.data,
  [loginUser.fulfilled]: (_, { payload }) => payload.data,
  [logOut.fulfilled]: () => initialUserState,
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload.data,
});

const token = createReducer(null, {
  [authUser.fulfilled]: (_, { payload }) => payload.data.token,
  [loginUser.fulfilled]: (_, { payload }) => payload.data.token,
  [logOut.fulfilled]: () => null,
});

const isAuth = createReducer(false, {
  [authUser.fulfilled]: () => false,
  [loginUser.fulfilled]: () => true,
  [logOut.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
});

const isAuthRefresh = createReducer(false, {
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});
export default combineReducers({
  user,
  token,
  isAuth,
  isAuthRefresh,
});
