import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: []
};

const areaSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      const lists = action.payload;
      state.lists = lists;
    }
  }
});
export const { setList } = areaSlice.actions;
export default areaSlice.reducer;
