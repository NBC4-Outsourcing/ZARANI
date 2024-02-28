import { configureStore } from '@reduxjs/toolkit';
import area from 'shared/redux/modules/areaSlice';
import auth from 'shared/redux/modules/authSlice';
import list from 'shared/redux/modules/mapListSlice';

const store = configureStore({
  reducer: {
    area,
    auth,
    list
  }
});

export default store;
