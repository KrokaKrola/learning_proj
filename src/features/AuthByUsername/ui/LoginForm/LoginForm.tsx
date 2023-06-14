import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={t('Введите username')}
        autofocus
      />
      <Input type="text" placeholder={t('Введите пароль')} />
      <Button>{t('Войти')}</Button>
    </div>
  );
};
