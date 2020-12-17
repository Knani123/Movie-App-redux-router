import React, { useState } from "react";
import StarRating from "./StarRating";

const Search = () => {
  const [etoile, setStars] = useState(1);
  const [val, setVal] = useState("");

  const addStars = (S) => {
    setStars(S);
  };
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div className="d-flex justify-conetent-center flex-column ">
      <input
        value={val}
        type="text"
        placeholder="Search"
        className="text-center"
        onChange={handleChange}
      />
      <StarRating rate={etoile} addStars={addStars} />
    </div>
  );
};

export default Search;
