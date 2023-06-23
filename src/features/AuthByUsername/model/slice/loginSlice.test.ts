import { type DeepPartial } from '@reduxjs/toolkit';
import { type LoginSchema } from 'features/AuthByUsername';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', function () {
  it('test set username', function () {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('test test'))
    ).toStrictEqual({ username: 'test test' });
  });

  it('test set password', function () {
    const state: DeepPartial<LoginSchema> = { password: '' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('test'))
    ).toStrictEqual({ password: 'test' });
  });
});
