import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addScore, getScores } from "../../actions/scores";
import { getPlayers } from "../../actions/players";
import { getCourses } from "../../actions/courses";

export class Form extends Component {
  state = {
    username: "",
    coursename: "",
    hole_1_score: 0,
    hole_2_score: 0,
    hole_3_score: 0,
    hole_4_score: 0,
    hole_5_score: 0,
    hole_6_score: 0,
    hole_7_score: 0,
    hole_8_score: 0,
    hole_9_score: 0,
    hole_10_score: 0,
    hole_11_score: 0,
    hole_12_score: 0,
    hole_13_score: 0,
    hole_14_score: 0,
    hole_15_score: 0,
    hole_16_score: 0,
    hole_17_score: 0,
    hole_18_score: 0,
    front_9_score: 0,
    back_9_score: 0,
    full_18_score: 0,
  };

  static propTypes = {
    addScore: PropTypes.func.isRequired,
    scores: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.getScores();
    this.props.getPlayers();
    this.props.getCourses();
  }

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      coursename,
      hole_1_score,
      hole_2_score,
      hole_3_score,
      hole_4_score,
      hole_5_score,
      hole_6_score,
      hole_7_score,
      hole_8_score,
      hole_9_score,
      hole_10_score,
      hole_11_score,
      hole_12_score,
      hole_13_score,
      hole_14_score,
      hole_15_score,
      hole_16_score,
      hole_17_score,
      hole_18_score,
      front_9_score,
      back_9_score,
      full_18_score,
    } = this.state;
    const score = {
      username,
      coursename,
      hole_1_score,
      hole_2_score,
      hole_3_score,
      hole_4_score,
      hole_5_score,
      hole_6_score,
      hole_7_score,
      hole_8_score,
      hole_9_score,
      hole_10_score,
      hole_11_score,
      hole_12_score,
      hole_13_score,
      hole_14_score,
      hole_15_score,
      hole_16_score,
      hole_17_score,
      hole_18_score,
      front_9_score,
      back_9_score,
      full_18_score,
    };
    this.props.addScore(score);
    console.log(score);
  };

  render() {
    console.log(this.props.courses);
    const {
      username,
      coursename,
      hole_1_score,
      hole_2_score,
      hole_3_score,
      hole_4_score,
      hole_5_score,
      hole_6_score,
      hole_7_score,
      hole_8_score,
      hole_9_score,
      hole_10_score,
      hole_11_score,
      hole_12_score,
      hole_13_score,
      hole_14_score,
      hole_15_score,
      hole_16_score,
      hole_17_score,
      hole_18_score,
      front_9_score,
      back_9_score,
      full_18_score,
    } = this.state;

    let allUsernames = this.props.players.map((player) => {
      return <option value={player.user_name}>{player.user_name}</option>;
    });
    let allCoursenames = this.props.courses.map((course) => {
      return <option value={course.course_name}>{course.course_name}</option>;
    });
    // const allUsernames = {this.props.scores.map((score) => (
    //   return <option value={score.username.user_name}>
    // ))}

    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Add Score</h1>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <div className="form-group">
            <label>User Name</label>
            <select
              className="form-control"
              placeholder="User Name"
              name="username"
              value={username}
            >
              <option value=""></option>
              {allUsernames}
            </select>
          </div>
          <div className="form-group">
            <label>Course Name</label>
            <select
              className="form-control"
              type="text"
              name="coursename"
              value={coursename}
            >
              <option value=""></option>
              {allCoursenames}
            </select>
          </div>
          <div>
            <label>Hole 1</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_1_score"
              onChange={this.onChange}
              value={hole_1_score}
            />
          </div>
          <div>
            <label>Hole 2</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_2_score"
              onChange={this.onChange}
              value={hole_2_score}
            />
          </div>
          <div>
            <label>Hole 3</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_3_score"
              onChange={this.onChange}
              value={hole_3_score}
            />
          </div>
          <div>
            <label>Hole 2</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_4_score"
              onChange={this.onChange}
              value={hole_4_score}
            />
          </div>
          <div>
            <label>Hole 5</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_5_score"
              onChange={this.onChange}
              value={hole_5_score}
            />
          </div>
          <div>
            <label>Hole 6</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_6_score"
              onChange={this.onChange}
              value={hole_6_score}
            />
          </div>
          <div>
            <label>Hole 7</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_7_score"
              onChange={this.onChange}
              value={hole_7_score}
            />
          </div>
          <div>
            <label>Hole 8</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_8_score"
              onChange={this.onChange}
              value={hole_8_score}
            />
          </div>
          <div>
            <label>Hole 9</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_9_score"
              onChange={this.onChange}
              value={hole_9_score}
            />
          </div>
          <div>
            <label>Hole 10</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_10_score"
              onChange={this.onChange}
              value={hole_10_score}
            />
          </div>
          <div>
            <label>Hole 11</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_11_score"
              onChange={this.onChange}
              value={hole_11_score}
            />
          </div>
          <div>
            <label>Hole 12</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_12_score"
              onChange={this.onChange}
              value={hole_12_score}
            />
          </div>
          <div>
            <label>Hole 13</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_13_score"
              onChange={this.onChange}
              value={hole_13_score}
            />
          </div>
          <div>
            <label>Hole 14</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_14_score"
              onChange={this.onChange}
              value={hole_14_score}
            />
          </div>
          <div>
            <label>Hole 15</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_15_score"
              onChange={this.onChange}
              value={hole_15_score}
            />
          </div>
          <div>
            <label>Hole 16</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_16_score"
              onChange={this.onChange}
              value={hole_16_score}
            />
          </div>
          <div>
            <label>Hole 17</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_17_score"
              onChange={this.onChange}
              value={hole_17_score}
            />
          </div>
          <div>
            <label>Hole 18</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="hole_18_score"
              onChange={this.onChange}
              value={hole_18_score}
            />
          </div>
          <div>
            <label>Front 9</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="front_9_score"
              onChange={this.onChange}
              value={front_9_score}
            />
          </div>
          <div>
            <label>Back 9</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="back_9_score"
              onChange={this.onChange}
              value={back_9_score}
            />
          </div>
          <div>
            <label>Full 18</label>
            <label>score</label>
            <input
              className=""
              type="number"
              name="full_18_score"
              onChange={this.onChange}
              value={full_18_score}
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
const mapStateToProps = (state) => ({
  scores: state.scores.scores,
  players: state.players.players,
  courses: state.courses.courses,
});
export default connect(mapStateToProps, {
  addScore,
  getScores,
  getPlayers,
  getCourses,
})(Form);
