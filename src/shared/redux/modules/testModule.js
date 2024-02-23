import { createSlice } from "@reduxjs/toolkit";

const initialState = { testValue: "value1" };

const testModule = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.testValue = "value2";
    },
  },
});

export const { setTest } = testModule.actions;
export default testModule.reducer;
