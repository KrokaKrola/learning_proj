import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { type Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div
        className={classNames(cls.CommentList, {}, [className, cls.loading])}
      >
        <CommentCard isLoading className={cls.comment} />
        <CommentCard isLoading className={cls.comment} />
        <CommentCard isLoading className={cls.comment} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('Пока без комментариев')} />
      )}
    </div>
  );
});
