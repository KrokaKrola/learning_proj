import { counterReducer, type CounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice.test', function () {
  it('should correctly update state after calling decrement', function () {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement)).toStrictEqual({
      value: 9,
    });
  });

  it('should correctly update state after calling increment', function () {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment)).toStrictEqual({
      value: 11,
    });
  });

  it('should work with empty state', function () {
    expect(counterReducer(undefined, counterActions.increment)).toStrictEqual({
      value: 1,
    });
  });
});
