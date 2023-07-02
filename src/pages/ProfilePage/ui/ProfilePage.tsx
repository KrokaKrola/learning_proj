import React, { useCallback, useEffect } from 'react';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_AVATAR]: t('Некорректный аватар'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'Некорректные данные пользователя'
    ),
    [ValidateProfileError.NO_DATA]: t('Нет данных'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          first: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          lastname: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value?.replaceAll(/[^0-9]/g, '') || 0),
        })
      );
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(
        profileActions.updateProfile({
          currency,
        })
      );
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(
        profileActions.updateProfile({
          country,
        })
      );
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfilePageHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            key={err}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[err]}
          />
        ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readOnly={readOnly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
