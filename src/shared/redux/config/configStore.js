import { configureStore } from '@reduxjs/toolkit';
import test from 'shared/redux/modules/testModule';
import area from 'shared/redux/modules/areaSlice';
import auth from 'shared/redux/modules/authSlice';

const store = configureStore({
  reducer: {
    test,
    area,
    auth
  }
});

export default store;
