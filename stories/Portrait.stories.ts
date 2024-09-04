import type { Meta, StoryObj } from '@storybook/react';
import  {Portrait}  from '../app/components/';

const meta = {
  title: 'Portrait',
  component: Portrait,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text'
      , description: "Text to display in h1 tag"
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'custom text' },
      }
    }
    , className: { control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description:"Inherited class"
  },
  },
} satisfies Meta<typeof Portrait>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PortraitStory: Story = {
  args: {
    className: 'primary',
    text: 'Carlos Raul Amaro',
  },
};

