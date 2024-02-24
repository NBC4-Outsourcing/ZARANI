//imageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import defaultImg from 'asset/defaultImage.png';

const initialState = {
  userInfo: {
    userId: '',
    nickname: '',
    avata: ''
  },
  selectImage: defaultImg,
  thumnailImage: defaultImg
};

const imageSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const newData = action.payload;
      state.userInfo = newData;
    },
    setSelectFile: (state, action) => {
      state.selectImage = action.payload;
    },
    setThumnailImg: (state, action) => {
      state.thumnailImage = action.payload;
    },
    setUserInfo: (state, aciton) => {
      state.userInfo = { ...state.userInfo, ...aciton.payload };
    }
  }
  // ,extraReducers: {}
});

export const { setUserInfo, setSelectFile, setThumnailImg } = imageSlice.actions;
export default imageSlice.reducer;
