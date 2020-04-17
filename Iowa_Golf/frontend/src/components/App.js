import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
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
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard_Scores />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
