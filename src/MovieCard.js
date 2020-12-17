import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
const MovieCard = ({ el }) => {
  return (
    <div
      className="col-lg-3 col-md-3 col-sm-3 border border-secondary shadow-lg m-2 text-center"
      id={el.id}
    >
      <StarRating rate={el.rate} />
      <img src={el.image} alt={el.name} width="150px" height="200px" />
      <h5>{el.name}</h5>
      <p>{el.date}</p>
      <hr className="m-1" />
      <button className="badge badge-outline-info bg bg-success border border-info m-3">
        <Link
          to={`/movie/${el.id}`}
          className="text-decoration-none text-light"
        >
          More details
        </Link>
      </button>
    </div>
  );
};

export default MovieCard;
