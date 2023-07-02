import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/img.png';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        profile: {
          readonly: true,
          form: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            currency: Currency.EUR,
            city: 'Kiyv',
            first: 'admin',
            lastname: 'admin',
            avatar,
          },
        },
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];

export const Dark: Story = {};

Dark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <StoreDecorator
        initialState={{
          profile: {
            readonly: true,
            form: {
              username: 'admin',
              age: 22,
              country: Country.Ukraine,
              currency: Currency.EUR,
              city: 'Kiyv',
              first: 'admin',
              lastname: 'admin',
              avatar,
            },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    </ThemeDecorator>
  ),
];
