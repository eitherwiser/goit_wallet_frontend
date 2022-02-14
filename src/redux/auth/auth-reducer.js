import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  authUser,
  loginUser,
  logOut,
  fetchCurrentUser,
} from './auth-operations';

const initialUserState = {
  user: { userName: null, email: null },
  token: null,
};
const user = createReducer(initialUserState, {
  [authUser.fulfilled]: (_, { payload }) => payload.user,
  [loginUser.fulfilled]: (state, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authUser.fulfilled]: (_, { payload }) => payload.token,
  [loginUser.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
});

const isAuth = createReducer(false, {
  [authUser.fulfilled]: () => true,
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
