import type { Meta, StoryObj } from '@storybook/react';
import  {Languages}  from '../app/components/Designs/';

const meta = {
  title: 'SpokenLanguages',
  component: Languages,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select',
      options: ['blue', 'purple', 'orange'],
      description:"inherited theme"
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      }
    },
    languages : {
      control: 'object' ,
      description:"list of languages to be displayed in the component"
      , table: {
        type: { summary: 'array' },
        defaultValue: { summary: '["es","en"]' },
      }
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Languages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguagesThemeStory: Story = {
  args: {
    theme: 'blue',
    languages: ['en', 'es']
  },
};
