import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/profile';

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
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
