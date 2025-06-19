import * as React from "react";
import "../app/globals.css";

export type CardProps = {
  title?: string;
  description?: string;
  image?: string;
  size?: "compact" | "default" | "wide";
  onClick?: () => void;
};

export const Card = ({
  title,
  description,
  image,
  size = "default",
  ...props
}: CardProps) => {
  const sizeClass = size !== "default" ? `storybook-card--${size}` : "";
  const imageClass = !image ? "storybook-card--no-image" : "";
  const cardClasses = ["storybook-card", sizeClass, imageClass]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} {...props}>
      {image && (
        <div className="storybook-card-image-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title || "Card image"}
            className="storybook-card-image"
            onError={(e) => {
              console.error("Failed to load image:", image);
              e.currentTarget.style.display = "none";
            }}
            onLoad={() => console.log("Image loaded successfully:", image)}
          />
        </div>
      )}
      <div className="storybook-card-content">
        {title && <h3 className="storybook-card-title">{title}</h3>}
        {description && (
          <p className="storybook-card-description">{description}</p>
        )}
      </div>
    </div>
  );
};
