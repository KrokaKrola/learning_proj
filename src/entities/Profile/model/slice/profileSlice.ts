import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  isLoading: true,
  readonly: true,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
