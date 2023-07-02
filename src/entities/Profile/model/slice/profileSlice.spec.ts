import { profileActions, profileReducer } from './profileSlice';
import { type ProfileSchema } from '../types/profile';

describe('profileSlice.test', function () {
  it('setReadOnly', function () {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))
    ).toStrictEqual({ readonly: true });
  });
});
