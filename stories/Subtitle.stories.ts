import type { Meta, StoryObj } from '@storybook/react';
import { SubtitleTag } from '../app/components/Designs/';



const meta = {
  title: 'Header H2 Tag',
  component: SubtitleTag,
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
      , description: "Text to display in h2 tag"
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'custom text' },
      }
    }
    , className: { control: 'text', description: "Component class", default: 'subtitle' }
  },
  parameters: {
    docs: {
      controls: {
        exclude: ['className'],
      },
    },
  },
} satisfies Meta<typeof SubtitleTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderH2ThemeStory: Story = {
  args: {
    theme: 'primary',
    text: 'Projects',
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
