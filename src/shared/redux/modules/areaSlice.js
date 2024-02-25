import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {}
};

const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setAreaInfo: (state, action) => {
      const selectArea = action.payload;
      state.value = selectArea;
    }
  }
});
export const { setAreaInfo } = areaSlice.actions;
export default areaSlice.reducer;
