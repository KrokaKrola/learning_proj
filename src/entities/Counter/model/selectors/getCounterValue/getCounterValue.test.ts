import { getCounterValue } from './getCounterValue';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getCounterValue.test', function () {
  it('', function () {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
