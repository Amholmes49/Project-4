import axios from "axios";
import { GET_SCORES, ADD_SCORE } from "./types";

export const getScores = () => (dispatch) => {
  axios
    .get("/api/scores/")
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

export const addScore = (score) => (dispatch) => {
  // console.log(score)
  axios
    .post("/api/scores/", score)
    .then((res) => {
      // console.log(res)
      dispatch({
        type: ADD_SCORE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
