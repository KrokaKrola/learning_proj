import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  currency: Currency.EUR,
  city: 'Kiyv',
  first: 'admin',
  lastname: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/123456?v=4',
};

describe('validateProfileData.test', function () {
  it('success', function () {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  it('should error on data without first or last name', function () {
    const result = validateProfileData({
      ...data,
      first: '',
      lastname: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  it('should error on invalid age', function () {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  it('should error on invalid country', function () {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  it('should error on invalid avatar', function () {
    const result = validateProfileData({
      ...data,
      avatar: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
  });

  it('should return all errors', function () {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AVATAR,
    ]);
  });
});
