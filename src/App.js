// import React, { useState } from "react";
import "./App.css";
import React from "react";
import MovieList from "./components/MovieList";
import NavMovie from "./components/NavMovie";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="container">
      <div className="jumbotron alert-info">
        <NavMovie />
        <MovieList />
      </div>
    </div>
  );
};

export default App;
