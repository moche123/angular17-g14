import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '../app/components/card/card.component';
import { signal } from '@angular/core';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const MainCard: Story = {
  args: {
    firstName: signal('Pankaj'),
  },
};
