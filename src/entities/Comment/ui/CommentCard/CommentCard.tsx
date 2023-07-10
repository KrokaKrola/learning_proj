import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { type Comment } from '../../model/types/comment';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton height={16} width="30%" />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </div>
    );
  }

  if (!comment) return null;

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
});
