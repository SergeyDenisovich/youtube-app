import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import youtubeAPI from '../api';

export const fetchUserRequest = createAsyncThunk('user/fetchByUserRequest', async (request, thunkAPI) => {
  try {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: request,
        maxResults: 12,
      },
    });
    return response.data.items;
  } catch (error) {
    return error;
  }
});

export const querySlice = createSlice({
  name: 'queries',
  initialState: {
    asyncResponse: null,
    asyncResponseError: null,
    savedQueries: [],
    isLoading: false,
  },
  reducers: {
    saveFavoriteQuery: (state, action) => {
      state.savedQueries.push(action.payload);
    },
    editFavoriteQuery: (state, action) => {
      state.savedQueries[action.payload.id] = action.payload;
    },
    deleteFavoriteQuery: (state, action) => {
      state.savedQueries.filter((query) => query.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchUserRequest.fulfilled]: (state, action) => {
      state.asyncResponse = action.payload;
    },
    [fetchUserRequest.rejected]: (state, action) => {
      state.asyncResponseError = action.payload;
    },
  },
});

export const { saveFavoriteQuery, editFavoriteQuery, deleteFavoriteQuery, queryResult } = querySlice.actions;

export default querySlice.reducer;
