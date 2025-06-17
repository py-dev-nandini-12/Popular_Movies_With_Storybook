import * as React from "react";
import { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
import "../app/globals.css";

export interface MovieGridProps {
  movies: Movie[];
  isLoading?: boolean;
  error?: string | null;
  onMovieClick?: (movie: Movie) => void;
}

const LoadingSkeleton = () => (
  <div className="movie-grid-loading">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="loading-skeleton-card">
        <div className="loading-skeleton-image" />
        <div className="loading-skeleton-content">
          <div className="loading-skeleton-title" />
          <div className="loading-skeleton-text" />
          <div className="loading-skeleton-text loading-skeleton-text--short" />
        </div>
      </div>
    ))}
  </div>
);

export const MovieGrid = ({
  movies,
  isLoading = false,
  error = null,
  onMovieClick,
}: MovieGridProps) => {
  if (error) {
    return (
      <div className="state-container">
        <div className="state-icon">🎬</div>
        <h3 className="state-title">Oops! Something went wrong</h3>
        <p className="state-message">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (movies.length === 0) {
    return (
      <div className="state-container">
        <div className="state-icon">🎥</div>
        <h3 className="state-title">No movies found</h3>
        <p className="state-message">
          We couldn&apos;t find any movies to display right now.
        </p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick}
        />
      ))}
    </div>
  );
};
