import { type FC } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import { type Currency, CurrencySelect } from 'entities/Currency';

import { CountrySelect, type Country } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeLastName?: (value?: string) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeLastName,
    onChangeFirstName,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Произошла ошибка')}
          theme={TextTheme.ERROR}
          text={t('попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt={data?.username} size={100} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя') || ''}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия') || ''}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст') || ''}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город') || ''}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('Ваш username') || ''}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Ваш аватар') || ''}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={data?.currency}
          readOnly={readOnly}
          className={cls.input}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          value={data?.country}
          readOnly={readOnly}
          className={cls.input}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
