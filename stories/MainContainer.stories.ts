import type { Meta, StoryObj } from '@storybook/react';
import  {MainContainer}  from '../app/components/';

const meta = {
  title: 'Main Container',
  component: MainContainer,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description:"Inherited class"
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      }
    },
  }
  , parameters: {
    docs: {
      controls: { exclude: ['className', 'children'] },
  },
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainContainerprimaryThemeStory: Story = {
  args: {
    theme: 'primary',
    main: true,
  },
};
