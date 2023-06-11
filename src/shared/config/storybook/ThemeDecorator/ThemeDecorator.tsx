import { type ReactNode } from 'react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: Theme;
}) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme || Theme.LIGHT}`}>{children}</div>
    </ThemeProvider>
  );
};
