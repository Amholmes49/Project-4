import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Iowa Golf
          </a>
          <Link to='/'>
            <button type="button" class="btn btn-primary btn-sm home-btn">Home</button>
          </Link>
          <Link to='/createplayer'>
            <button type="button" class="btn btn-secondary btn-sm">Create Player</button>
          </Link>
          <Link to='/createcourse'>
            <button type="button" class="btn btn-secondary btn-sm">Create Course</button>
          </Link>
          {/* <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>
    );
  }
}

export default Header;
