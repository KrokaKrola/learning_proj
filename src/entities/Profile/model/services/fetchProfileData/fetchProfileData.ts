import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
  'profile/fetchProfileData',
  async (profileId, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`);

      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue('error');
    }
  }
);
