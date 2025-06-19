import type { Meta, StoryObj } from '@storybook/nextjs';
import { MovieGrid } from '../components/MovieGrid';
import type { Movie } from '../types/movie';

// Mock data for stories
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    genre_ids: [18, 80],
    adult: false,
    backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
    original_language: "en",
    original_title: "The Shawshank Redemption",
    popularity: 100.5,
    video: false,
    vote_count: 26000
  },
  {
    id: 2,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: "1972-03-24",
    vote_average: 9.2,
    genre_ids: [18, 80],
    adult: false,
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    original_language: "en",
    original_title: "The Godfather",
    popularity: 95.8,
    video: false,
    vote_count: 19000
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-18",
    vote_average: 9.0,
    genre_ids: [28, 80, 18],
    adult: false,
    backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    original_language: "en",
    original_title: "The Dark Knight",
    popularity: 88.5,
    video: false,
    vote_count: 32000
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    genre_ids: [80, 18],
    adult: false,
    backdrop_path: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    original_language: "en",
    original_title: "Pulp Fiction",
    popularity: 75.2,
    video: false,
    vote_count: 27000
  },
];

const meta = {
  title: 'Movie App/MovieGrid',
  component: MovieGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    movies: {
      description: 'Array of movies to display in the grid',
    },
  },
} satisfies Meta<typeof MovieGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movies: mockMovies,
  },
};

export const Loading: Story = {
  args: {
    movies: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'MovieGrid with no movies (loading state).',
      },
    },
  },
};

export const SingleMovie: Story = {
  args: {
    movies: [mockMovies[0]],
  },
  parameters: {
    docs: {
      description: {
        story: 'MovieGrid with a single movie.',
      },
    },
  },
};

export const TwoMovies: Story = {
  args: {
    movies: mockMovies.slice(0, 2),
  },
  parameters: {
    docs: {
      description: {
        story: 'MovieGrid with two movies to test responsive layout.',
      },
    },
  },
};
