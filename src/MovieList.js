import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const MovieList = () => {
  let movies = useSelector((state) => state.movieReducer.list);
  const ser = useSelector((state) => state.movieReducer.ser);
  movies = movies.filter(
    (el) =>
      el.name.toUpperCase().includes(ser.val.toUpperCase().trim()) &&
      el.rate >= ser.rate
  );
  return (
    <div>
      {movies && (
        <div className="row text-center justify-content-center">
          {movies.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
