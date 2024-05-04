import type { Meta, StoryObj } from '@storybook/react';
import { Ptag } from '../app/components/';

const meta = {
  title: 'Spoken Languages',
  component: Ptag,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'select'
      , options: ['lang__blue', 'lang__purple', 'lang__orange']
      , description: 'The class name of the component'
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lang__blue' },
      },
    }
    , children: {
      control: 'text'
      , description: 'The text of the component'
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'English' },
      },
    }
    , title: {
      control: 'text'
      , description: 'The title of the component'
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'on hover tag' },
      },
    }
  },

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Ptag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnglishLanguagesThemeStory: Story = {
  args: {
    className: 'lang__blue'
    , children: 'English'
    , title: 'on hover tag'
  },
};

export const SpanishLanguagesThemeStory: Story = {
  args: {
    className: 'lang__blue'
    , children: 'Español'
    , title: 'tag de desplazamiento'
  },
};

export const PortugueseLanguagesThemeStory: Story = {
  args: {
    className: 'lang__orange'
    , children: 'Português'
    , title: 'tag de deslocamento'
  },
};
