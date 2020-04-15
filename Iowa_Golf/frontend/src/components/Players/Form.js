import React, { Component } from "react";

export class Form extends Component {
  state = {
    full_name: "",
    user_name: "",
    email: "",
    handicap: "",
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
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
              value={name}
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              className="form-control"
              type="text"
              name="user_name"
              onChange={this.onChange}
              value={name}
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

export default Form;
