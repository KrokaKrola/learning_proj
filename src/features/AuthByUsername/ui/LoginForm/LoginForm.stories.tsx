import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        loginForm: {
          password: '123',
          username: '123',
        },
      }}
      asyncReducers={{
        loginForm: loginReducer,
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];

export const WithError: Story = {
  args: {},
};

WithError.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        loginForm: {
          password: '123',
          username: '123',
          error: 'Вы ввели неверный логин или пароль',
        },
      }}
      asyncReducers={{
        loginForm: loginReducer,
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];

export const Loading: Story = {
  args: {},
};

Loading.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        loginForm: {
          password: '',
          username: '',
          isLoading: true,
        },
      }}
      asyncReducers={{
        loginForm: loginReducer,
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{}}
      asyncReducers={{
        loginForm: loginReducer,
      }}
    >
      <Story />
    </StoreDecorator>
  ),
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];
