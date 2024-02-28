import { configureStore } from '@reduxjs/toolkit';
import area from 'shared/redux/modules/areaSlice';
import auth from 'shared/redux/modules/authSlice';

const store = configureStore({
  reducer: {
    area,
    auth
  }
});

export default store;
