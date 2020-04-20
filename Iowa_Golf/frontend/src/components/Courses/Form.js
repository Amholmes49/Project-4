import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCourse } from "../../actions/courses";

export class Form extends Component {
  state = {
    course_name: "",
    course_location: "",
    image_url: "",
    hole_1_par: "0",
    hole_2_par: "0",
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
    full_18_par: 0,
  };

  static propTypes = {
    addCourse: PropTypes.func.isRequired,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const {
      course_name,
      course_location,
      image_url,
      hole_1_par,
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
      full_18_par,
    } = this.state;
    const course = {
      course_name,
      course_location,
      image_url,
      hole_1_par,
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
      full_18_par,
    };
    this.props.addCourse(course);
    console.log(course);
  };

  render() {
    const {
      course_name,
      course_location,
      image_url,
      hole_1_par,
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
      full_18_par,
    } = this.state;
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
            <label>Course Location</label>
            <input
              className="form-control"
              type="text"
              name="course_location"
              onChange={this.onChange}
              value={course_location}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              name="image_url"
              onChange={this.onChange}
              value={image_url}
            />
          </div>
          <div>
            <label>Hole 1</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_1_par"
              onChange={this.onChange}
              value={hole_1_par}
            />
          </div>
          <div>
            <label>Hole 2</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_2_par"
              onChange={this.onChange}
              value={hole_2_par}
            />
          </div>
          <div>
            <label>Hole 3</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_3_par"
              onChange={this.onChange}
              value={hole_3_par}
            />
          </div>
          <div>
            <label>Hole 4</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_4_par"
              onChange={this.onChange}
              value={hole_4_par}
            />
          </div>
          <div>
            <label>Hole 5</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_5_par"
              onChange={this.onChange}
              value={hole_5_par}
            />
          </div>
          <div>
            <label>Hole 6</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_6_par"
              onChange={this.onChange}
              value={hole_6_par}
            />
          </div>
          <div>
            <label>Hole 7</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_7_par"
              onChange={this.onChange}
              value={hole_7_par}
            />
          </div>
          <div>
            <label>Hole 8</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_8_par"
              onChange={this.onChange}
              value={hole_8_par}
            />
          </div>
          <div>
            <label>Hole 9</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_9_par"
              onChange={this.onChange}
              value={hole_9_par}
            />
          </div>
          <div>
            <label>Hole 10</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_10_par"
              onChange={this.onChange}
              value={hole_10_par}
            />
          </div>
          <div>
            <label>Hole 11</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_11_par"
              onChange={this.onChange}
              value={hole_11_par}
            />
          </div>
          <div>
            <label>Hole 12</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_12_par"
              onChange={this.onChange}
              value={hole_12_par}
            />
          </div>
          <div>
            <label>Hole 13</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_13_par"
              onChange={this.onChange}
              value={hole_13_par}
            />
          </div>
          <div>
            <label>Hole 14</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_14_par"
              onChange={this.onChange}
              value={hole_14_par}
            />
          </div>
          <div>
            <label>Hole 15</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_15_par"
              onChange={this.onChange}
              value={hole_15_par}
            />
          </div>
          <div>
            <label>Hole 16</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_16_par"
              onChange={this.onChange}
              value={hole_16_par}
            />
          </div>
          <div>
            <label>Hole 17</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_17_par"
              onChange={this.onChange}
              value={hole_17_par}
            />
          </div>
          <div>
            <label>Hole 18</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="hole_18_par"
              onChange={this.onChange}
              value={hole_18_par}
            />
          </div>
          <div>
            <label>Front 9</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="front_9_par"
              onChange={this.onChange}
              value={front_9_par}
            />
          </div>
          <div>
            <label>Back 9</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="back_9_par"
              onChange={this.onChange}
              value={back_9_par}
            />
          </div>
          <div>
            <label>Full 18</label>
            <label>Par</label>
            <input
              className=""
              type="number"
              name="full_18_par"
              onChange={this.onChange}
              value={full_18_par}
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
