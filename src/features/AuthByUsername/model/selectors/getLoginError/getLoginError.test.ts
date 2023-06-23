import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', function () {
  it('should return error', function () {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema)).toBe('error');
  });

  it('should work with empty state', function () {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toBe(undefined);
  });
});
