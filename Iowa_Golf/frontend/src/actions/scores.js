import axios from "axios";
import { GET_SCORES } from "./types";

export const getScores = () => (dispatch) => {
  axios
    .get("/api/Scores/")
    .then((res) => {
      dispatch({
        type: GET_SCORES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// export const deleteCourse = (id) => (dispatch) => {
//   axios
//     .delete(`/api/courses/${id}/`)
//     .then((res) => {
//       dispatch({
//         type: DELETE_COURSE,
//         payload: id,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// export const addCourse = (course) => (dispatch) => {
//   axios
//     .post("/api/courses/", course)
//     .then((res) => {
//       dispatch({
//         type: ADD_COURSE,
//         payload: res.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };
