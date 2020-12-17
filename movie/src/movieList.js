import React from "react";
import { useSelector } from "react-redux";
const MovieList = () => {
  const movies = useSelector((state) => state.moviesReducer);
  return <div></div>;
};

export default MovieList;
