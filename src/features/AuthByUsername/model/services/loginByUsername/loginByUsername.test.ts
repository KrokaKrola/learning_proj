import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', function () {
  it('should perform login operations', async function () {
    const userValue = { username: '123', id: '1' };
    mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userValue);
  });

  it('should respond with error', async function () {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
