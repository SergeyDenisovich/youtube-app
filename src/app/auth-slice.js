import { createSlice } from '@reduxjs/toolkit';
import users from '../users.json';
import { v4 as uuidv4 } from 'uuid';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    logIn: (state, action) => {
      const { login, password } = action.payload;
      const isUserAuthorized = users.some(
        (user) => user.login === login.trim().toLowerCase() && user.password === password.trim().toLowerCase()
      );

      if (isUserAuthorized) {
        const userToken = uuidv4();
        state.user = login;
        state.token = userToken;
      }
    },
    logOut: (state) => {
      state.user = state.token = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
