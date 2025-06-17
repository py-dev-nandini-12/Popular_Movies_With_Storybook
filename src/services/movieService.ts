import { MovieResponse } from '../types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'demo_key';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// For demo purposes, we'll use a demo API key
// In production, you should get your own API key from https://www.themoviedb.org/settings/api
const DEMO_API_KEY = '8265bd1679663a7ea12ac168da84d2e8';

export class MovieService {
  private static getApiKey(): string {
    return API_KEY !== 'demo_key' ? API_KEY : DEMO_API_KEY;
  }

  static async getTopRatedMovies(page: number = 1): Promise<MovieResponse> {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${this.getApiKey()}&page=${page}&language=en-US`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
      throw error;
    }
  }

  static async getPopularMovies(page: number = 1): Promise<MovieResponse> {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${this.getApiKey()}&page=${page}&language=en-US`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  }

  static async getNowPlayingMovies(page: number = 1): Promise<MovieResponse> {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/now_playing?api_key=${this.getApiKey()}&page=${page}&language=en-US`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
      throw error;
    }
  }

  static getImageUrl(path: string | null, size: string = 'w500'): string {
    if (!path) return '/placeholder-movie.svg';
    return `${IMAGE_BASE_URL}/${size}${path}`;
  }

  static formatRating(rating: number): string {
    return (rating / 2).toFixed(1); // Convert from 10-point to 5-point scale
  }

  static formatYear(dateString: string): string {
    return new Date(dateString).getFullYear().toString();
  }
}
