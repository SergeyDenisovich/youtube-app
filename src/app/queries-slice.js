import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'queries',
  initialState: {
    allQueries: [],
  },
  reducers: {
    saveFavoriteQuery: (state, action) => {
      state.allQueries.push(action.payload);
    },
    editFavoriteQuery: (state, action) => {
      state.allQueries[action.payload.id] = action.payload;
    },
    deleteFavoriteQuery: (state, action) => {
      state.allQueries.filter((query) => query.id !== action.payload);
    },
  },
});

export const { saveFavoriteQuery, editFavoriteQuery, deleteFavoriteQuery } = querySlice.actions;

export default querySlice.reducer;
