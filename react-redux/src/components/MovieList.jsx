import React from "react";
import { useSelector } from "react-redux";

export const MovieList = () => {
    // guard against missing slice and ensure we get an array
    const movies = useSelector((state) => state.movies?.movies ?? []);
    console.log("MovieList movies:", movies);

    if (!movies || movies.length === 0) {
      return <div><h1>Movie List</h1><p>No movies found</p></div>;
    }

    return (
      <div>
        <h1>Movie List</h1>
        {movies.map((movie, idx) => (
          <div key={movie.id ?? idx}>
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    );
};