import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCourses, deleteCourse } from "../../actions/courses";
import { Link } from "react-router-dom";

export class Courses extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    getCourses: PropTypes.func.isRequired,
    deleteCourses: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <Fragment>
        <h1>Course List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Course Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.props.courses.map((course) => (
              <tr key={course.id}>
                {/* <td>{player.id}</td> */}
                <Link to={`/courses/${course.id}`}>
                  <td>{course.course_name}</td>
                </Link>
                <td>{course.course_location}</td>
                <td>
                  <button
                    onClick={this.props.deleteCourse.bind(this, course.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
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
  courses: state.courses.courses,
});
export default connect(mapStateToProps, { getCourses, deleteCourse })(Courses);
