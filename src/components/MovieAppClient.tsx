"use client";

import React, { useState, useTransition } from "react";
import { Movie } from "../types/movie";
import { MovieGrid } from "./MovieGrid";
import { getTopRatedMovies, getPopularMovies, getNowPlayingMovies } from "../app/actions";

export type MovieCategory = "top_rated" | "popular" | "now_playing";

interface MovieAppClientProps {
  initialMovies: Movie[];
  initialCategory: MovieCategory;
}

export const MovieAppClient = ({ initialMovies, initialCategory }: MovieAppClientProps) => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [currentCategory, setCurrentCategory] = useState<MovieCategory>(initialCategory);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchMovies = async (category: MovieCategory) => {
    try {
      setError(null);
      
      let response;
      switch (category) {
        case "top_rated":
          response = await getTopRatedMovies();
          break;
        case "popular":
          response = await getPopularMovies();
          break;
        case "now_playing":
          response = await getNowPlayingMovies();
          break;
      }
      
      setMovies(response.results);
      setCurrentCategory(category);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch movies");
    }
  };

  const handleCategoryChange = (category: MovieCategory) => {
    if (category === currentCategory) return;
    
    startTransition(() => {
      fetchMovies(category);
    });
  };

  const handleMovieClick = (movie: Movie) => {
    console.log("Selected movie:", movie);
    // Here you could navigate to a movie detail page or show a modal
    const rating = (movie.vote_average / 2).toFixed(1);
    alert(`Selected: ${movie.title}\n\nRating: ${rating}/5\n\n${movie.overview}`);
  };

  const getCategoryTitle = () => {
    switch (currentCategory) {
      case "top_rated":
        return "🏆 Top Rated Movies";
      case "popular":
        return "🔥 Popular Movies";
      case "now_playing":
        return "🎬 Now Playing";
    }
  };

  return (
    <>
      {/* Category Navigation */}
      <div className="category-navigation">
        {[
          { key: "top_rated" as const, label: "🏆 Top Rated", description: "Highest rated movies" },
          { key: "popular" as const, label: "🔥 Popular", description: "Trending now" },
          { key: "now_playing" as const, label: "🎬 Now Playing", description: "In theaters" }
        ].map(({ key, label, description }) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            disabled={isPending}
            className={`category-button ${
              currentCategory === key ? 'category-button--active' : ''
            } ${isPending ? 'category-button--disabled' : ''}`}
          >
            <div className="category-button-label">{label}</div>
            <div className="category-button-description">{description}</div>
          </button>
        ))}
      </div>

      {/* Page Title */}
      <div className="page-title-section">
        <h1 className="page-title">{getCategoryTitle()}</h1>
        <p className="page-subtitle">
          Discover amazing movies with beautiful ratings and detailed information
        </p>
      </div>

      {/* Movie Grid */}
      <MovieGrid
        movies={movies}
        isLoading={isPending}
        error={error}
        onMovieClick={handleMovieClick}
      />
    </>
  );
};
