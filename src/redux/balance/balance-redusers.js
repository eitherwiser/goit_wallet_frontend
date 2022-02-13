import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setBalance } from "./balance-action";

const balance = createReducer(0, {
  [setBalance]: (state, action) => state + action.payload,
});

export default combineReducers({
  balance,
});
