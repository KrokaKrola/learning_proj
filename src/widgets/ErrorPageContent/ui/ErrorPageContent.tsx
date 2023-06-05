import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPageContent.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorPageContentProps {
  className?: string;
}

export const ErrorPageContent: FC<ErrorPageContentProps> = ({ className }) => {
  const { t } = useTranslation();

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPageContent, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={handleReloadPage}>{t('Перезагрузить страницу')}</Button>
    </div>
  );
};
