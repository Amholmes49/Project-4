import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addScore, getScores } from "../../actions/scores";
import { getPlayers } from "../../actions/players";
import { getCourses } from "../../actions/courses";
import "./CSS/form.css";

export class Form extends Component {
  constructor(props) {
    super();
  }
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

  onload = (event) =>
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
    console.log(this.state.hole_1_score);

    // console.log(this.state);
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
    let currentCourseId = this.props.match.params.id;
    let currentCourse = this.props.courses.filter((course, index) => {
      return parseInt(currentCourseId) === course.id;
    });
    // const allUsernames = {this.props.scores.map((score) => (
    //   return <option value={score.username.user_name}>
    // ))}
    console.log(currentCourse);
    console.log(currentCourseId);
    // console.log(this.props.courses[0].id)
    let front9topar =
      currentCourse[0].hole_1_par +
      currentCourse[0].hole_2_par +
      currentCourse[0].hole_3_par +
      currentCourse[0].hole_4_par +
      currentCourse[0].hole_5_par +
      currentCourse[0].hole_6_par +
      currentCourse[0].hole_7_par +
      currentCourse[0].hole_8_par +
      currentCourse[0].hole_9_par;

    let back9topar =
      currentCourse[0].hole_10_par +
      currentCourse[0].hole_11_par +
      currentCourse[0].hole_12_par +
      currentCourse[0].hole_13_par +
      currentCourse[0].hole_14_par +
      currentCourse[0].hole_15_par +
      currentCourse[0].hole_16_par +
      currentCourse[0].hole_17_par +
      currentCourse[0].hole_18_par;

    let full18topar = front9topar + back9topar;

    let front9toscore =
      parseInt(this.state.hole_1_score) +
      parseInt(this.state.hole_2_score) +
      parseInt(this.state.hole_3_score) +
      parseInt(this.state.hole_4_score) +
      parseInt(this.state.hole_5_score) +
      parseInt(this.state.hole_6_score) +
      parseInt(this.state.hole_7_score) +
      parseInt(this.state.hole_8_score) +
      parseInt(this.state.hole_9_score);

    let back9toscore =
      parseInt(this.state.hole_10_score) +
      parseInt(this.state.hole_11_score) +
      parseInt(this.state.hole_12_score) +
      parseInt(this.state.hole_13_score) +
      parseInt(this.state.hole_14_score) +
      parseInt(this.state.hole_15_score) +
      parseInt(this.state.hole_16_score) +
      parseInt(this.state.hole_17_score) +
      parseInt(this.state.hole_18_score);

    let full18toscore = front9toscore + back9toscore;

    return (
      <div className="card card-body mt-4 mb-4 addscore">
        <h1>Add Score</h1>
        <img className="courseImage" src={currentCourse[0].image_url} />
        <form
          className="scoreform"
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        >
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
              onLoadedDataCapture={this.onload}
              value={coursename}
            >
              <option>{currentCourse[0].course_name}</option>
            </select>
          </div>
          <div className="holescontainer">
            <div className="holecontainer hole1">
              <label className="holenumberlabel">1</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_1_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_1_score"
                onChange={this.onChange}
                value={hole_1_score}
              />
            </div>
            <div className="holecontainer hole2">
              <label className="holenumberlabel">2</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_2_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_2_score"
                onChange={this.onChange}
                value={hole_2_score}
              />
            </div>
            <div className="holecontainer hole3">
              <label className="holenumberlabel">3</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_3_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_3_score"
                onChange={this.onChange}
                value={hole_3_score}
              />
            </div>
            <div className="holecontainer hole4">
              <label className="holenumberlabel">4</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_4_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_4_score"
                onChange={this.onChange}
                value={hole_4_score}
              />
            </div>
            <div className="holecontainer hole5">
              <label className="holenumberlabel">5</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_5_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_5_score"
                onChange={this.onChange}
                value={hole_5_score}
              />
            </div>
            <div className="holecontainer hole6">
              <label className="holenumberlabel">6</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_6_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_6_score"
                onChange={this.onChange}
                value={hole_6_score}
              />
            </div>
            <div className="holecontainer hole7">
              <label className="holenumberlabel">7</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_7_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_7_score"
                onChange={this.onChange}
                value={hole_7_score}
              />
            </div>
            <div className="holecontainer hole8">
              <label className="holenumberlabel">8</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_8_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_8_score"
                onChange={this.onChange}
                value={hole_8_score}
              />
            </div>
            <div className="holecontainer hole9">
              <label className="holenumberlabel">9</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_9_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_9_score"
                onChange={this.onChange}
                value={hole_9_score}
              />
            </div>
            <div className="holecontainer hole10">
              <label className="holenumberlabel">10</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_10_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_10_score"
                onChange={this.onChange}
                value={hole_10_score}
              />
            </div>
            <div className="holecontainer hole11">
              <label className="holenumberlabel">11</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_11_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_11_score"
                onChange={this.onChange}
                value={hole_11_score}
              />
            </div>
            <div className="holecontainer hole12">
              <label className="holenumberlabel">12</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_12_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_12_score"
                onChange={this.onChange}
                value={hole_12_score}
              />
            </div>
            <div className="holecontainer hole13">
              <label className="holenumberlabel">13</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_13_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_13_score"
                onChange={this.onChange}
                value={hole_13_score}
              />
            </div>
            <div className="holecontainer hole14">
              <label className="holenumberlabel">14</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_14_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_14_score"
                onChange={this.onChange}
                value={hole_14_score}
              />
            </div>
            <div className="holecontainer hole15">
              <label className="holenumberlabel">15</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_15_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_15_score"
                onChange={this.onChange}
                value={hole_15_score}
              />
            </div>
            <div className="holecontainer hole16">
              <label className="holenumberlabel">16</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_16_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_16_score"
                onChange={this.onChange}
                value={hole_16_score}
              />
            </div>
            <div className="holecontainer hole17">
              <label className="holenumberlabel">17</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_17_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_17_score"
                onChange={this.onChange}
                value={hole_17_score}
              />
            </div>
            <div className="holecontainer hole18">
              <label className="holenumberlabel">18</label>
              <label className="holeparlabel">
                {currentCourse[0].hole_18_par}
              </label>

              <input
                className="inputfield"
                type="number"
                name="hole_18_score"
                onChange={this.onChange}
                value={hole_18_score}
              />
            </div>
            <div className="holecontainer front9total">
              <label className="holenumberlabel">Out</label>
              <label className="holeparlabel">{front9topar}</label>

              <div
                className="inputfield"
                type="number"
                name="full_18_score"
                onChange={this.onChange}
                value={full_18_score}
              >
                {front9toscore}
              </div>
            </div>
            <div className="holecontainer back9total">
              <label className="holenumberlabel">In</label>
              <label className="holeparlabel">{back9topar}</label>

              <div
                className="inputfield"
                type="number"
                name="full_18_score"
                onChange={this.onChange}
                value={full_18_score}
              >
                {back9toscore}
              </div>
            </div>
            <div className="holecontainer full18total">
              <label className="holenumberlabel">Total</label>
              <label className="holeparlabel">{full18topar}</label>

              <div
                className="inputfield"
                type="number"
                name="full_18_score"
                onChange={this.onChange}
                value={full_18_score}
              >
                {full18toscore}
              </div>
            </div>
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
