import 'app/styles/index.scss';
import { type ReactNode } from 'react';

export const StyleDecorator = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
