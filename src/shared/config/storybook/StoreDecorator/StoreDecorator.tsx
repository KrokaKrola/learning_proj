import { type ReactNode } from 'react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState: DeepPartial<StateSchema>;
}) => {
  return <StoreProvider initialState={initialState}>{children}</StoreProvider>;
};
