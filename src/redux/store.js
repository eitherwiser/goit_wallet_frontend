import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./balance/balance-redusers";

const store = configureStore({
  reducer,
});

export default store;
