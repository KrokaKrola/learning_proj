import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', function () {
  it('should return error', function () {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };

    expect(getLoginPassword(state as StateSchema)).toBe('123');
  });

  it('should work with empty state', function () {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
