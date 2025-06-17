import * as React from "react";
import { Movie } from "../types/movie";
import "../app/globals.css";

// Movie utility functions (moved from MovieService)
const getImageUrl = (path: string | null, size: string = "w500"): string => {
  if (!path) return "/placeholder-movie.svg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

const formatRating = (rating: number): string => {
  return (rating / 2).toFixed(1); // Convert from 10-point to 5-point scale
};

const formatYear = (dateString: string): string => {
  return new Date(dateString).getFullYear().toString();
};

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

  const posterUrl = getImageUrl(movie.poster_path);
  const rating = formatRating(movie.vote_average);
  const year = formatYear(movie.release_date);

  return (
    <div className={cardClasses} onClick={handleClick} {...props}>
      <div className="storybook-card-image-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterUrl}
          alt={movie.title}
          className="storybook-card-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder-movie.svg";
          }}
        />
        <div className="storybook-card-rating-badge">⭐ {rating}</div>
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
        <div className="storybook-card-meta">
          <span>{movie.vote_count} votes</span>
          <span className="storybook-card-language-badge">
            {movie.original_language.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};
