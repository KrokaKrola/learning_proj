import React, { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const readOnly = useSelector(getProfileReadOnly);
  const isLoading = useSelector(getProfileIsLoading);

  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    if (authData?.id) {
      dispatch(updateProfileData(authData?.id));
    }
  }, [dispatch, authData?.id]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль') || ''} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readOnly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.editBtn}
              onClick={handleEdit}
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.editBtn}
                onClick={handleCancel}
                disabled={isLoading}
              >
                {t('Отменить')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.saveBtn}
                onClick={handleSave}
                disabled={isLoading}
              >
                {t('Сохранить')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
