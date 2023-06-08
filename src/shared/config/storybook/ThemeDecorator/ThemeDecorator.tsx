import { type ReactNode } from 'react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: Theme;
}) => {
  return <div className={`app ${theme || Theme.LIGHT}`}>{children}</div>;
};
