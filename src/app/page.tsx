import React from "react";
import { Movie } from "../types/movie";
import { HeaderClient } from "../components/HeaderClient";
import { MovieAppClient } from "../components/MovieAppClient";
import { getTopRatedMovies } from "./actions";

export default async function Home() {
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
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <HeaderClient />
      
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        {error ? (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 24px",
            textAlign: "center",
            minHeight: "50vh"
          }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎬</div>
            <h3 style={{
              color: "var(--text-primary)",
              marginBottom: "8px",
              fontSize: "18px",
              fontWeight: "600"
            }}>
              Unable to load movies
            </h3>
            <p style={{
              color: "var(--text-secondary)",
              maxWidth: "400px",
              lineHeight: "1.6"
            }}>
              {error}
            </p>
          </div>
        ) : (
          <MovieAppClient 
            initialMovies={initialMovies}
            initialCategory="top_rated"
          />
        )}

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
