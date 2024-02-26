import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';

const initialState = {
  loginState: !!getLocalStorageJSON().access_token
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginState = true;
    },
    logout: (state, action) => {
      state.loginState = false;
      localStorage.clear();
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
