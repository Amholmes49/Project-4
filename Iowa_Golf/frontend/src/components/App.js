import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Header from "./layout/Header";
import Home from "./layout/Home";
import Dashboard from "./Players/Dashboard";
import Dashboard_Courses from "./Courses/Dashboard_Courses";
import Dashboard_Scores from "./Scores/Dashboard_Scores";
import { Provider } from "react-redux";
import store from "../store";
import "./App.css"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />

          <div className="container">

          </div>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createplayer" exact component={Dashboard} />
            <Route path="/createcourse" exact component={Dashboard_Courses} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
