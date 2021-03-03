import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import queryReducer from './queries-slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    query: queryReducer,
  },
});
