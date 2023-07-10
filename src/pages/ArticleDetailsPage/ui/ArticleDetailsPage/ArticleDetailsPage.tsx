import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/articleDetailsCommentsSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const params = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(params.id));
  }, [dispatch, params.id]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!params.id && __PROJECT__ !== 'storybook') {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={params.id as string} />
        <Text title={t('Комментарии')} className={cls.commentsTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
