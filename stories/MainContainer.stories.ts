import type { Meta, StoryObj } from '@storybook/react';
import  {MainContainer}  from '../app/components/';

const meta = {
  title: 'Main Container',
  component: MainContainer,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select',
      options: ['blue', 'purple', 'orange'],
      description:"Inherited class"
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
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

export const MainContainerBlueThemeStory: Story = {
  args: {
    theme: 'blue',
    main: true,
  },
};

export const MainContainerPurpleThemeStory: Story = {
  args: {
    theme: 'purple',
    main: true,
  },
};

export const MainContainerOrangeThemeStory: Story = {
  args: {
    theme: 'orange',
    main: true,
  },
};

