'use server';

import { MovieResponse } from '../types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'demo_key';
const BASE_URL = 'https://api.themoviedb.org/3';

// For demo purposes, we'll use a demo API key
// In production, you should get your own API key from https://www.themoviedb.org/settings/api
const DEMO_API_KEY = '8265bd1679663a7ea12ac168da84d2e8';

function getApiKey(): string {
  return API_KEY !== 'demo_key' ? API_KEY : DEMO_API_KEY;
}

export async function getTopRatedMovies(page: number = 1): Promise<MovieResponse> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${getApiKey()}&page=${page}&language=en-US`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
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

export async function getPopularMovies(page: number = 1): Promise<MovieResponse> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${getApiKey()}&page=${page}&language=en-US`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
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

export async function getNowPlayingMovies(page: number = 1): Promise<MovieResponse> {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${getApiKey()}&page=${page}&language=en-US`,
      {
        next: { revalidate: 1800 } // Cache for 30 minutes (more frequent updates for now playing)
      }
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
