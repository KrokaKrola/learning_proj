import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../..//model/services/fetchArticleById/fetchArticleById';
import { useDispatch, useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const articleData = useSelector(getArticleDetailsData);
  const articleError = useSelector(getArticleDetailsError);
  const { t } = useTranslation('article-details');

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          width={200}
          height={200}
          border="50%"
          className={cls.avatar}
        />
        <Skeleton width={300} height={32} className={cls.title} />
        <Skeleton width={600} height={32} className={cls.skeleton} />
        <Skeleton width={'100%'} height={200} className={cls.skeleton} />
        <Skeleton width={'100%'} height={200} className={cls.skeleton} />
      </>
    );
  } else if (articleError) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла непредвиденная ошибка')}
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={articleData?.img}
            alt={articleData?.title}
            className={cls.avatar}
          />
        </div>
        <Text
          title={articleData?.title}
          text={articleData?.subtitle}
          className={cls.title}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={articleData?.views.toString()} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={articleData?.createdAt} />
        </div>
        {articleData?.blocks.map(renderBlock)}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
});
