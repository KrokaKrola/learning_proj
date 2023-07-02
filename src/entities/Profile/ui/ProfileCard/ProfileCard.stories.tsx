import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/img.png';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    readOnly: true,
    data: {
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
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'error',
  },
};
