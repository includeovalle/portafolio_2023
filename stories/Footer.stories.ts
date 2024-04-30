import type { Meta, StoryObj } from '@storybook/react';
import  Index  from '../app/components/Designs/footer/index';

const meta = {
  title: 'Example/Footer',
  component: Index,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['blue', 'purple', 'orange'] },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    theme: 'blue' || 'purple' ||  'orange',
    default: 'blue',
  },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterBlueTheme: Story = {
  args: {
    theme: 'blue',
  },
};

export const FooterPurpleTheme: Story = {
  args: {
    theme: 'purple',
  },
};

export const FooterOrangeTheme: Story = {
  args: {
    theme: 'orange',
  },
};
