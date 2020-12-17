import React from "react";

const StarRating = ({ rate, addStars }) => {
  const stars = (n) => {
    let T = [];
    for (let i = 0; i < 6; i++) {
      i < n
        ? T.push(
            <span
              className="text-warning"
              style={{ cursor: "pointer" }}
              onClick={() => addStars(i + 1)}
            >
              ★
            </span>
          )
        : T.push(
            <span
              className="text-dark"
              style={{ cursor: "pointer" }}
              onClick={() => addStars(i + 1)}
            >
              ★
            </span>
          );
    }
    return T;
  };
  return <div>{stars(rate).map((el) => el)}</div>;
};

export default StarRating;
