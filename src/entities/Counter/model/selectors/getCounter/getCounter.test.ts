import { getCounter } from './getCounter';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', function () {
  it('should return counter value', function () {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounter(state as StateSchema)).toStrictEqual({ value: 10 });
  });
});
