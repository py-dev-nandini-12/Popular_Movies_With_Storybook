import * as React from "react";
import { Movie } from "../types/movie";
import { MovieService } from "../services/movieService";
import "../app/globals.css";

export interface MovieCardProps {
  movie: Movie;
  size?: "compact" | "default" | "wide";
  onClick?: (movie: Movie) => void;
}

export const MovieCard = ({
  movie,
  size = "default",
  onClick,
  ...props
}: MovieCardProps) => {
  const sizeClass = size !== "default" ? `storybook-card--${size}` : "";
  const cardClasses = ["storybook-card", sizeClass].filter(Boolean).join(" ");

  const handleClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  const posterUrl = MovieService.getImageUrl(movie.poster_path);
  const rating = MovieService.formatRating(movie.vote_average);
  const year = MovieService.formatYear(movie.release_date);

  return (
    <div className={cardClasses} onClick={handleClick} {...props}>
      <div style={{ position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterUrl}
          alt={movie.title}
          className="storybook-card-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-movie.svg';
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "4px 8px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          ⭐ {rating}
        </div>
      </div>
      <div className="storybook-card-content">
        <h3 className="storybook-card-title">
          {movie.title} ({year})
        </h3>
        <p className="storybook-card-description">
          {movie.overview.length > 120
            ? `${movie.overview.substring(0, 120)}...`
            : movie.overview}
        </p>
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "var(--text-secondary)",
          }}
        >
          <span>{movie.vote_count} votes</span>
          <span style={{ 
            background: "var(--accent-blue)", 
            color: "white", 
            padding: "2px 6px", 
            borderRadius: "4px",
            fontSize: "10px",
            fontWeight: "600"
          }}>
            {movie.original_language.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};
