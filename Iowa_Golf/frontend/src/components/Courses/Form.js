import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCourse } from "../../actions/courses";

export class Form extends Component {
  state = {
    course_name: "",
    course_location: "",
    image_url: "",
    hole_1_par: 0,
    hole_2_par: 0,
    hole_3_par: 0,
    hole_4_par: 0,
    hole_5_par: 0,
    hole_6_par: 0,
    hole_7_par: 0,
    hole_8_par: 0,
    hole_9_par: 0,
    hole_10_par: 0,
    hole_11_par: 0,
    hole_12_par: 0,
    hole_13_par: 0,
    hole_14_par: 0,
    hole_15_par: 0,
    hole_16_par: 0,
    hole_17_par: 0,
    hole_18_par: 0,
    front_9_par: 0,
    back_9_par: 0,
    full_18_par: 0
  };

  static propTypes = {
    addCourse: PropTypes.func.isRequired,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const { course_name, course_location, image_url, hole_1_par,
      hole_2_par,
      hole_3_par,
      hole_4_par,
      hole_5_par,
      hole_6_par,
      hole_7_par,
      hole_8_par,
      hole_9_par,
      hole_10_par,
      hole_11_par,
      hole_12_par,
      hole_13_par,
      hole_14_par,
      hole_15_par,
      hole_16_par,
      hole_17_par,
      hole_18_par,
      front_9_par,
      back_9_par,
      full_18_par } = this.state;
    const course = {
      course_name, course_location, image_url, hole_1_par,
      hole_2_par,
      hole_3_par,
      hole_4_par,
      hole_5_par,
      hole_6_par,
      hole_7_par,
      hole_8_par,
      hole_9_par,
      hole_10_par,
      hole_11_par,
      hole_12_par,
      hole_13_par,
      hole_14_par,
      hole_15_par,
      hole_16_par,
      hole_17_par,
      hole_18_par,
      front_9_par,
      back_9_par,
      full_18_par
    };
    this.props.addCourse(course);
    console.log(course);
  };

  render() {
    const { course_name, course_location, image_url, hole_1_par,
      hole_2_par,
      hole_3_par,
      hole_4_par,
      hole_5_par,
      hole_6_par,
      hole_7_par,
      hole_8_par,
      hole_9_par,
      hole_10_par,
      hole_11_par,
      hole_12_par,
      hole_13_par,
      hole_14_par,
      hole_15_par,
      hole_16_par,
      hole_17_par,
      hole_18_par,
      front_9_par,
      back_9_par,
      full_18_par } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Add Course</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Course Name</label>
            <input
              className="form-control"
              type="text"
              name="course_name"
              onChange={this.onChange}
              value={course_name}
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

export default connect(null, { addCourse })(Form);
