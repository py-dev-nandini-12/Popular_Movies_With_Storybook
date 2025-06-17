import React from "react";
import { Movie } from "../types/movie";
import { HeaderClient } from "../components/HeaderClient";
import { MovieAppClient } from "../components/MovieAppClient";
import { getTopRatedMovies } from "./actions";

const Home = async () => {
  // Fetch initial data on the server
  let initialMovies: Movie[] = [];
  let error: string | null = null;

  try {
    const response = await getTopRatedMovies();
    initialMovies = response.results;
  } catch (err) {
    console.error("Failed to fetch initial movies:", err);
    initialMovies = [];
    error = err instanceof Error ? err.message : "Failed to fetch movies";
  }

  return (
    <div className="movie-app-container">
      <HeaderClient />

      <main className="movie-app-main">
        {error ? (
          <div className="state-container">
            <div className="state-icon">🎬</div>
            <h3 className="state-title">Unable to load movies</h3>
            <p className="state-message">{error}</p>
          </div>
        ) : (
          <MovieAppClient
            initialMovies={initialMovies}
            initialCategory="top_rated"
          />
        )}

        <footer className="app-footer">
          <p>Movie data provided by The Movie Database (TMDB)</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
