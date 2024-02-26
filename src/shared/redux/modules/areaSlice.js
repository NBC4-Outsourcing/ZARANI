import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  serchTxt: '서울 자전거 길'
};

const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setAreaInfo: (state, action) => {
      const selectArea = action.payload;
      state.serchTxt = selectArea;
    }
  }
});
export const { setAreaInfo } = areaSlice.actions;
export default areaSlice.reducer;
