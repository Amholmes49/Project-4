import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getScores } from "../../actions/scores";

export class Scores extends Component {
  static propTypes = {
    scores: PropTypes.array.isRequired,
    getScores: PropTypes.func.isRequired,
    // deleteScores: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getScores();
  }

  render() {
    return (
      <Fragment>
        <h1>Scores</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>User Name</th>
              <th>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.scores.map((score) => (
              <tr key={score.id}>
                <td>{score.username.user_name}</td>
                <td>{score.coursename.course_name}</td>
                <td>
                  {/* <button
                    onClick={this.props.deleteCourse.bind(this, course.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  scores: state.scores.scores,
});
export default connect(mapStateToProps, { getScores })(Scores);
