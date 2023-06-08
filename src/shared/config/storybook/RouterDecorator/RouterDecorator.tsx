import 'app/styles/index.scss';
import { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
