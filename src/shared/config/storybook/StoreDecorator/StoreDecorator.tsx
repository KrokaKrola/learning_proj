import { type ReactNode } from 'react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = ({
  children,
  initialState,
  asyncReducers,
}: {
  children: ReactNode;
  initialState: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
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
