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
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: "32px 0",
        flexWrap: "wrap"
      }}>
        {[
          { key: "top_rated" as const, label: "🏆 Top Rated", description: "Highest rated movies" },
          { key: "popular" as const, label: "🔥 Popular", description: "Trending now" },
          { key: "now_playing" as const, label: "🎬 Now Playing", description: "In theaters" }
        ].map(({ key, label, description }) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            disabled={isPending}
            style={{
              background: currentCategory === key 
                ? "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
                : "var(--card-bg)",
              color: currentCategory === key ? "white" : "var(--text-primary)",
              border: currentCategory === key ? "none" : "2px solid rgba(139, 92, 246, 0.2)",
              borderRadius: "16px",
              padding: "16px 24px",
              cursor: isPending ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              fontWeight: "600",
              fontSize: "14px",
              textAlign: "center",
              minWidth: "140px",
              backdropFilter: "blur(10px)",
              boxShadow: currentCategory === key 
                ? "0 8px 25px rgba(139, 92, 246, 0.3)"
                : "0 4px 6px rgba(0, 0, 0, 0.1)",
              opacity: isPending ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (currentCategory !== key && !isPending) {
                (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.target as HTMLButtonElement).style.borderColor = "rgba(139, 92, 246, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentCategory !== key && !isPending) {
                (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                (e.target as HTMLButtonElement).style.borderColor = "rgba(139, 92, 246, 0.2)";
              }
            }}
          >
            <div>{label}</div>
            <div style={{ 
              fontSize: "12px", 
              opacity: 0.8, 
              marginTop: "4px" 
            }}>
              {description}
            </div>
          </button>
        ))}
      </div>

      {/* Page Title */}
      <div style={{
        textAlign: "center",
        marginBottom: "32px"
      }}>
        <h1 style={{
          fontSize: "48px",
          fontWeight: "800",
          margin: "0 0 16px 0",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.025em"
        }}>
          {getCategoryTitle()}
        </h1>
        <p style={{
          color: "var(--text-secondary)",
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
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
