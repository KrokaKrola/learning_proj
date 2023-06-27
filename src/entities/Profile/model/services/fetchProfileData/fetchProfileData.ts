import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig
>('profile/fetchProfileData', async (_, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get<Profile>('/profile');

    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue('error');
  }
});
