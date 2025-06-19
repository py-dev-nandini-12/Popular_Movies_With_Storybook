import * as React from "react";
import "../app/globals.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  
  // Build className with custom background color class
  const customColorClass = backgroundColor ? "storybook-button--custom" : "";
  const className = ["storybook-button", `storybook-button--${size}`, mode, customColorClass]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={className}
      {...(backgroundColor && { 'data-bg-color': backgroundColor })}
      {...props}
    >
      {label}
    </button>
  );
};
