import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    lat: 37.57241118053246,
    lng: 126.70242841204563
  }
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
