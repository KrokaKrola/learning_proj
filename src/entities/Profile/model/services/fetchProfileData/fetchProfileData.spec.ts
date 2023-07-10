import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  currency: Currency.EUR,
  city: 'Kiyv',
  first: 'admin',
  lastname: 'admin',
};

describe('fetchProfileData.test', function () {
  it('success', async function () {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockResolvedValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  it('should respond with error', async function () {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
