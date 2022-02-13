import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setBalance } from "./balance-action";

const balanceReducer = createReducer(0, {
  [setBalance]: (state, action) => state + action.payload,
});

export const reducer = combineReducers({
  balance: balanceReducer,
});
