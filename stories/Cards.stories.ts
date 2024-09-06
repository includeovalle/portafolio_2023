import LOGO from '../public/logo.png';
import GAME from '../public/juego.webp';
import BODA from '../public/boda.png';


import type { Meta, StoryObj } from '@storybook/react';
import { CustomImage } from '../app/components/';

const meta = {
  title: 'Card',
  component: CustomImage,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'select'
      , options: ['card__primary', 'card__secondary', 'card__tertiary']
      , description: 'The class name of the component'
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'card__primary' },
      },
    }
    , src: {
      control: 'select'
      , description: "Choose image for card"
      , options: [LOGO.src, GAME.src, BODA.src],
      defaultValue: { summary: LOGO.src },
    }
    , figcaption: {
      description: "if active card will display text content",
      defaultValue: { summary: true }
    }
    , alt: {
      description: "alt for card images"
      , defaultValue: { summary: 'insert alt tag' }
    }
    , links: {
      description: "especify if image is a clickable link"
      , defaultValue: { summary: false }
    }
    , href: {
      description: "link where you'll be redirected"
      , defaultValue: { summary: "empty" }
    }
    , target: {
      control: 'select'
      , description: "href target"
      , options: ['_self', '_blank']
      , defaultValue: { summary: "_blank" }
    }
    , text: {
       description: "text that will display on link"
      , defaultValue: { summary: "this is a link" }
    }
    , width: {
      description: "card width"
      ,defaultValue: {summary: 220}
    }
    , height: {
      description: "card height"
      , defaultValue: {summary: 500}
    }
    , children: {
      control: 'text'
      , description: 'insert the custom tags to create card'
      , table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'HTML tags' },
      },
    }
  }

  , parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CustomImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    className: 'card__secondary'
    , src: LOGO
    , children: `insert html tags here`
    , figcaption: true
    , alt: "card image"
    , links: false
    , target: "_blank"
    , width: 280
    , height: 500
  },
};
