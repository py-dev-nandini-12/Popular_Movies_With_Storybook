import type { Meta, StoryObj } from '@storybook/nextjs';
import { MovieCard } from '../components/MovieCard';
import { Movie } from '../types/movie';

const mockMovie: Movie = {
  id: 1,
  title: "The Shawshank Redemption",
  overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
  release_date: "1994-09-23",
  vote_average: 8.7,
  vote_count: 26000,
  genre_ids: [18, 80],
  adult: false,
  original_language: "en",
  original_title: "The Shawshank Redemption",
  popularity: 120.5,
  video: false
};

const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A beautiful movie card component that displays movie information including poster, title, rating, and description.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['compact', 'default', 'wide'],
      description: 'The size variant of the movie card',
    },
    onClick: {
      action: 'movie clicked',
      description: 'Callback function when the movie card is clicked',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: mockMovie,
    size: 'default',
  },
};

export const Compact: Story = {
  args: {
    movie: mockMovie,
    size: 'compact',
  },
};

export const Wide: Story = {
  args: {
    movie: mockMovie,
    size: 'wide',
  },
};

export const LongDescription: Story = {
  args: {
    movie: {
      ...mockMovie,
      overview: "This is a very long movie description that should be truncated when it exceeds the maximum length limit. The component should show an ellipsis (...) at the end to indicate that there is more text that is not being displayed. This helps maintain a clean and consistent card layout regardless of the description length.",
    },
    size: 'default',
  },
};

export const HighRating: Story = {
  args: {
    movie: {
      ...mockMovie,
      vote_average: 9.8,
      title: "Perfect Movie",
    },
    size: 'default',
  },
};

export const LowRating: Story = {
  args: {
    movie: {
      ...mockMovie,
      vote_average: 3.2,
      title: "Low Rated Movie",
    },
    size: 'default',
  },
};
