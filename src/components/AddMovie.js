import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { addMovie } from "../action/movieAction";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const AddMovie = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [form, setForm] = useState({
    id: Math.random(),
    name: "",
    date: "",
    image: "",
    trailer: "",
    info: "",
    rate: "1",
  });
  const addStars = (stars) => {
    setForm({ ...form, rate: stars });
    console.log(stars);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const clearForm = () => {
    setForm({
      id: Math.random(),
      name: "",
      date: "",
      image: "",
      trailer: "",
      info: "",
      rate: "1",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(form));
    clearForm();
    swal("Good job!", "Your Movie is Added!", "success");
    setTimeout(() => {
      history.push(`/#${form.id}`);
    }, 2000);
  };
  return (
    <div className="d-flex flex-column">
      <button className="btn btn-success position-absolute m-2">
        <Link to="./" className="text-light text-decoration-none">
          Go Back
        </Link>
        &#11207;
      </button>
      <h1 className=" w-50 m-auto text-center">Add Your Movie</h1>
      <form
        action=""
        className="d-flex flex-column w-50 m-auto alert alert-warning border border-secondary"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Mobie's name</label>
        <input
          required
          value={form.name}
          type="text"
          placeholder="name"
          id="name"
          onChange={handleChange}
        />
        <span className="d-flex border my-1">
          <lable className="mr-2">rate it: </lable>{" "}
          <StarRating rate={form.rate} addStars={addStars} />
        </span>
        <label htmlFor="image">Mobie's URL Image</label>
        <input
          required
          value={form.image}
          type="text"
          placeholder="ImageUrl"
          id="image"
          onChange={handleChange}
        />
        <label htmlFor="trailer"> Mobie's URL Youtube Trailer</label>
        <input
          required
          value={form.trailer}
          type="text"
          placeholder="URL Youtube Trailer"
          id="trailer"
          onChange={handleChange}
        />
        <label htmlFor="info">description </label>
        <input
          required
          value={form.info}
          type="text"
          placeholder="description"
          id="info"
          onChange={handleChange}
        />
        <label htmlFor="date">Releases Date</label>
        <input
          required
          type="date"
          id="date"
          onChange={handleChange}
          value={form.date}
        />
        <span className="m-1">
          <button className="badge badge-success" type="submit">
            Add
          </button>
          <button className="badge badge-danger" type="reset">
            reset
          </button>
        </span>
      </form>
    </div>
  );
};

export default AddMovie;
