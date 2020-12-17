import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const movies = useSelector((state) => state.movieReducer);
  return (
    <div>
      <div className="row text-center justify-content-center">
        {movies.map((el) => (
          <MovieCard el={el} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
