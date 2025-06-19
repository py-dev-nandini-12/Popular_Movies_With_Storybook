import type { Meta, StoryObj } from '@storybook/nextjs';
import { HeaderClient } from '../components/HeaderClient';

const meta = {
  title: 'Movie App/HeaderClient',
  component: HeaderClient,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderClient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInteraction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header with interactive login/logout functionality for the movie app.',
      },
    },
  },
};
