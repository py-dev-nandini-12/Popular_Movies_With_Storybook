import type { Meta, StoryObj } from '@storybook/nextjs';
import { MovieAppClient } from '../components/MovieAppClient';
import { Movie } from '../types/movie';

const mockMovies: Movie[] = [
  {
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
  },
  {
    id: 2,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    release_date: "1972-03-14",
    vote_average: 8.6,
    vote_count: 19000,
    genre_ids: [18, 80],
    adult: false,
    original_language: "en",
    original_title: "The Godfather",
    popularity: 95.2,
    video: false
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    release_date: "2008-07-18",
    vote_average: 8.5,
    vote_count: 32000,
    genre_ids: [28, 80, 18],
    adult: false,
    original_language: "en",
    original_title: "The Dark Knight",
    popularity: 140.8,
    video: false
  }
];

const meta: Meta<typeof MovieAppClient> = {
  title: 'Components/MovieAppClient',
  component: MovieAppClient,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The main client component that handles movie category selection and displays movie grids with interactive features.',
      },
    },
  },
  argTypes: {
    initialCategory: {
      control: { type: 'select' },
      options: ['top_rated', 'popular', 'now_playing'],
      description: 'The initial movie category to display',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialMovies: mockMovies,
    initialCategory: 'top_rated',
  },
};

export const Popular: Story = {
  args: {
    initialMovies: mockMovies,
    initialCategory: 'popular',
  },
};

export const NowPlaying: Story = {
  args: {
    initialMovies: mockMovies,
    initialCategory: 'now_playing',
  },
};

export const EmptyState: Story = {
  args: {
    initialMovies: [],
    initialCategory: 'top_rated',
  },
};
