import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPlayer } from "../../actions/players";

export class Form extends Component {
  state = {
    full_name: "",
    user_name: "",
    email: "",
    handicap: "",
  };

  static propTypes = {
    addPlayer: PropTypes.func.isRequired,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const { full_name, user_name, email, handicap } = this.state;
    const player = { full_name, user_name, email, handicap };
    this.props.addPlayer(player);
    console.log(player);
  };

  render() {
    const { full_name, user_name, email, handicap } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Add Player Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              className="form-control"
              type="text"
              name="full_name"
              onChange={this.onChange}
              value={full_name}
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              className="form-control"
              type="text"
              name="user_name"
              onChange={this.onChange}
              value={user_name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Handicap</label>
            <input
              className="form-control"
              type="number"
              name="handicap"
              onChange={this.onChange}
              value={handicap}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPlayer })(Form);
