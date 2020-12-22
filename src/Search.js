import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import StarRating from "./StarRating";
import { serMovie } from "./action/movieAction";

const Search = () => {
  const dispatch = useDispatch();
  const [valetoile, setValetoile] = useState({ val: "", rate: 1 });
  const addStars = (S) => {
    setValetoile({ ...valetoile, rate: S });
  };
  const handleChange = (e) => {
    setValetoile({ ...valetoile, val: e.target.value });
  };
  useEffect(() => {
    dispatch(serMovie(valetoile));
  }, [valetoile]);
  return (
    <div className="d-flex justify-conetent-center flex-column ">
      <input
        value={valetoile.val}
        type="text"
        placeholder="Search"
        className="text-center"
        onChange={handleChange}
      />
      <StarRating rate={valetoile.rate} addStars={addStars} />
    </div>
  );
};

export default Search;
