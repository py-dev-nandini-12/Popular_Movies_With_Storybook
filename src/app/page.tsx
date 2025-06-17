"use client";

import React, { useState, useEffect } from "react";
import { Movie } from "../types/movie";
import { MovieService } from "../services/movieService";
import { MovieGrid } from "../components/MovieGrid";
import { Header } from "../components/Header";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<"top_rated" | "popular" | "now_playing">("top_rated");

  const fetchMovies = async (category: "top_rated" | "popular" | "now_playing") => {
    try {
      setIsLoading(true);
      setError(null);
      
      let response;
      switch (category) {
        case "top_rated":
          response = await MovieService.getTopRatedMovies();
          break;
        case "popular":
          response = await MovieService.getPopularMovies();
          break;
        case "now_playing":
          response = await MovieService.getNowPlayingMovies();
          break;
      }
      
      setMovies(response.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch movies");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentCategory);
  }, [currentCategory]);

  const handleMovieClick = (movie: Movie) => {
    console.log("Selected movie:", movie);
    // Here you could navigate to a movie detail page or show a modal
    alert(`Selected: ${movie.title}\n\nRating: ${MovieService.formatRating(movie.vote_average)}/5\n\n${movie.overview}`);
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
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header 
        user={{ name: "Movie Lover" }}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
      
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
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
              onClick={() => setCurrentCategory(key)}
              style={{
                background: currentCategory === key 
                  ? "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
                  : "var(--card-bg)",
                color: currentCategory === key ? "white" : "var(--text-primary)",
                border: currentCategory === key ? "none" : "2px solid rgba(139, 92, 246, 0.2)",
                borderRadius: "16px",
                padding: "16px 24px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                fontSize: "14px",
                textAlign: "center",
                minWidth: "140px",
                backdropFilter: "blur(10px)",
                boxShadow: currentCategory === key 
                  ? "0 8px 25px rgba(139, 92, 246, 0.3)"
                  : "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                if (currentCategory !== key) {
                  (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.target as HTMLButtonElement).style.borderColor = "rgba(139, 92, 246, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (currentCategory !== key) {
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
          isLoading={isLoading}
          error={error}
          onMovieClick={handleMovieClick}
        />

        {/* Footer */}
        <footer style={{
          textAlign: "center",
          padding: "48px 24px",
          color: "var(--text-secondary)",
          fontSize: "14px"
        }}>
          <p>Movie data provided by The Movie Database (TMDB)</p>
        </footer>
      </main>
    </div>
  );
}
