import { type ReactNode } from 'react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

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
    <StoreProvider
      initialState={initialState}
      asyncReducers={{
        ...defaultAsyncReducers,
        ...asyncReducers,
      }}
    >
      {children}
    </StoreProvider>
  );
};
