import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue('error');
    }
  }
);
