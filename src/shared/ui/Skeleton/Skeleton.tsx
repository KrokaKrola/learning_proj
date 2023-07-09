import { type CSSProperties, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

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
  withAnimation = true,
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
