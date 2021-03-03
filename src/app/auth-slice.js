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

        localStorage.setItem('token', JSON.stringify({ token: userToken, user: login }));
      }
    },
    logOut: (state) => {
      state.user = state.token = null;
      localStorage.clear();
    },
    onReload: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { logIn, logOut, onReload } = authSlice.actions;

export default authSlice.reducer;
