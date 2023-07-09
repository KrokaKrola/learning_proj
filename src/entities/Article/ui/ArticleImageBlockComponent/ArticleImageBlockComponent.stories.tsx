import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from '../../model/types/article';

const meta = {
  title: 'entities/Article/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  argTypes: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
  },
};
