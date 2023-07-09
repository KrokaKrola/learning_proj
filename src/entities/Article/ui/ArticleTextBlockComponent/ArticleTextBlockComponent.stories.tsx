import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/types/article';

const meta = {
  title: 'entities/Article/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  argTypes: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      title: 'Title',
      paragraphs: ['First paragraph', 'Second paragraph', 'Third paragraph'],
      id: '1',
      type: ArticleBlockType.TEXT,
    },
  },
};
