import { configureStore } from '@reduxjs/toolkit';
import test from 'shared/redux/modules/testModule';
import user from 'shared/redux/modules/userSlice';
import area from 'shared/redux/modules/userSlice';

const store = configureStore({
  reducer: {
    test,
    user,
    area
  }
});

export default store;
