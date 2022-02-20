import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addTransaction, getAllTransactions } from "./transaction-operations";
const transaction = createReducer([], {
  [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
  [getAllTransactions.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [addTransaction.pending]: () => true,
  [addTransaction.fulfilled]: () => false,
  [addTransaction.rejected]: () => false,
  [getAllTransactions.pending]: () => true,
  [getAllTransactions.fulfilled]: () => false,
  [getAllTransactions.rejected]: () => false,
});
export default combineReducers({
  transaction,
  isLoading,
});
