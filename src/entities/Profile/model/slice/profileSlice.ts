import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile, type ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  isLoading: true,
  readonly: true,
  error: undefined,
  data: undefined,
  validateErrors: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.validateErrors = undefined;
      state.form = state.data;
    },
    updateProfile: (state, { payload }: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
        state.readonly = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
