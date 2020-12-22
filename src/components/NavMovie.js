import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavMovie = () => {
  return (
    <div className="d-flex text-center   alert-success justify-content-around  align-itmes fixed-top border border-info">
      <button className="btn btn-secondary ">
        <Link to="/" className="text-decoration-none m-3 text-warning">
          Movies List
        </Link>
      </button>
      <Search />
      <button className="btn btn-warning ">
        <Link
          to="/AddYourMovie"
          className="text-decoration-none m-3 text-danger"
        >
          Add Your Movie
        </Link>
      </button>
    </div>
  );
};

export default NavMovie;
