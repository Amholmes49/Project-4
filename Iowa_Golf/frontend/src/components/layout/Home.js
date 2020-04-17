import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCourses } from "../../actions/courses";

export class Home extends Component {
    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        let allCoursenames = this.props.courses.map((course) => {
            return <option value={course.course_name}>{course.course_name}</option>;
        });
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Course Name</label>
                        <select
                            className="form-control"
                            type="text"
                        >
                            <option value=""></option>
                            {allCoursenames}
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Select Course
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    courses: state.courses.courses,
});
export default connect(mapStateToProps, {
    getCourses,
})(Home);
