import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onInputChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onInputChange('');
    onSendComment(text || '');
  }, [onInputChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onInputChange}
        />
        {error && (
          <Text text={error} theme={TextTheme.ERROR} className={cls.error} />
        )}
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
