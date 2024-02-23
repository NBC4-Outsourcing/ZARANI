import { configureStore } from "@reduxjs/toolkit";
import test from "shared/redux/modules/testModule";

const store = configureStore({
  reducer: { test },
});

export default store;
