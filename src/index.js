import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NavMovie from "./components/NavMovie";
import AddMovie from "./components/AddMovie";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/movie/:id" component={MovieDetails} />
          <Route exact path="/AddYourMovie" component={AddMovie} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
