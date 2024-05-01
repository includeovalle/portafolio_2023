import type { Meta, StoryObj } from '@storybook/react';
import  {Footer}  from '../app/components/Designs/';

const meta = {
  title: 'Footer',
  component: Footer,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select',
      options: ['blue', 'purple', 'orange'],
      description:"Footer component"
      , table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'blue' },
      }
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterBlueThemeStory: Story = {
  args: {
    theme: 'blue',
  },
};

export const FooterPurpleThemeStory: Story = {
  args: {
    theme: 'purple',
  },
};

export const FooterOrangeThemeStory: Story = {
  args: {
    theme: 'orange',
  },
};
