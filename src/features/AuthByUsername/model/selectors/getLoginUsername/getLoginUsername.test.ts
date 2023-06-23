import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', function () {
  it('should return error', function () {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123',
      },
    };

    expect(getLoginUsername(state as StateSchema)).toBe('123');
  });

  it('should work with empty state', function () {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
