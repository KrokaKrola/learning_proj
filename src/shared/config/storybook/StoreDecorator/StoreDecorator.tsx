import { type ReactNode } from 'react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';

export const StoreDecorator = ({
  children,
  initialState,
  asyncReducers,
}: {
  children: ReactNode;
  initialState: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}) => {
  return (
    <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
      {children}
    </StoreProvider>
  );
};
