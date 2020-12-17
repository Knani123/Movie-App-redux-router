import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  const movies = useSelector((state) => state.movieReducer);
  const movId = useParams().id;
  console.log("movies", movies);
  console.log(movId);
  const myMovie = movies.find((el) => el.id == movId);
  console.log(myMovie);
  const play = useRef();
  return (
    <div className="container text-center ">
      <div className="jumbotron">
        <div className="m-auto  w-75  ">
          <iframe
            width="500"
            height="250"
            src={
              myMovie.trailer.replace("watch?v=", "embed/") +
              "?autoplay=1&mute=1"
            }
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className=" border border-secondary "
            ref={play}
          ></iframe>
        </div>
        <h3
          className="btn btn-outline-success w-25 m-auto border border-secondary"
          onClick={() => (play.current.autoplay = 1)}
        >
          Action/Drama
        </h3>
      </div>
    </div>
  );
};

export default MovieDetails;
