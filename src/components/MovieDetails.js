import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const MovieDetails = (props) => {
  const movies = useSelector((state) => state.movieReducer.list);
  const movId = useParams().id;
  const myMovie = movies.find((el) => el.id == movId);

  const play = useRef();
  return (
    <div className="container text-center ">
      {myMovie ? (
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
      ) : (
        setTimeout(props.history.push("/"), 2000)
      )}
    </div>
  );
};

export default MovieDetails;
