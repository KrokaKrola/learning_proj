import { type CSSProperties, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { IS_STORYBOOK } from 'shared/const/project';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  withAnimation?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  height,
  border,
  width,
  withAnimation = !IS_STORYBOOK,
}) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      style={styles}
      className={classNames(
        cls.Skeleton,
        { [cls.withAnimation]: withAnimation },
        [className]
      )}
    ></div>
  );
};
