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
  <div 
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "24px",
      padding: "24px",
    }}
  >
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        style={{
          background: "var(--card-bg)",
          borderRadius: "20px",
          overflow: "hidden",
          maxWidth: "320px",
          margin: "0 auto",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      >
        <div
          style={{
            height: "200px",
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s ease-in-out infinite",
          }}
        />
        <div style={{ padding: "24px" }}>
          <div
            style={{
              height: "24px",
              background: "rgba(0,0,0,0.1)",
              borderRadius: "4px",
              marginBottom: "12px",
            }}
          />
          <div
            style={{
              height: "16px",
              background: "rgba(0,0,0,0.1)",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          />
          <div
            style={{
              height: "16px",
              background: "rgba(0,0,0,0.1)",
              borderRadius: "4px",
              width: "60%",
            }}
          />
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
          textAlign: "center",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            marginBottom: "16px",
          }}
        >
          🎬
        </div>
        <h3
          style={{
            color: "var(--text-primary)",
            marginBottom: "8px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Oops! Something went wrong
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "400px",
            lineHeight: "1.6",
          }}
        >
          {error}
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (movies.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
          textAlign: "center",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            marginBottom: "16px",
          }}
        >
          🎥
        </div>
        <h3
          style={{
            color: "var(--text-primary)",
            marginBottom: "8px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          No movies found
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "400px",
            lineHeight: "1.6",
          }}
        >
          We couldn&apos;t find any movies to display right now.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
        padding: "24px",
        justifyItems: "center",
      }}
    >
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
