import type { Meta, StoryObj } from '@storybook/react';
import { TitleTag } from '../app/components/Designs/';



const meta = {
  title: 'Header H1 Tag',
  component: TitleTag,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: "Inherited theme", default: 'secondary'
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      }
    }
    , text: {
      control: 'text'
      , description: "Text to display in h1 tag"
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'custom text' },
      }
    }
    , className: { control: 'text', description: "Component class", default: 'subtitle' }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    docs: {
      controls: {
        exclude: ['className'],
      },
    },
  },
} satisfies Meta<typeof TitleTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderH1ThemeStory: Story = {
  args: {
    theme: 'secondary',
    text: 'skills',
    className: 'subtitle'
  },
  parameters: {
    docs: {
      controls: {
        exclude: ['className'],
      },
    },
  },
};
