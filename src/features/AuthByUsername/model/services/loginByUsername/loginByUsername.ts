import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/local-storage';
import { type ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig
>(
  'login/loginByUsername',
  async ({ username, password }, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error('Invalid credentials');
      }

      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(response.data)
      );

      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue('error');
    }
  }
);
