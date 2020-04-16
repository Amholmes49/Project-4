import axios from "axios";
import { GET_COURSES, DELETE_COURSE } from "./types";

export const getCourses = () => (dispatch) => {
    axios
        .get("/api/courses/")
        .then((res) => {
            dispatch({
                type: GET_COURSES,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

export const deleteCourse = (id) => (dispatch) => {
    axios
        .delete(`/api/courses/${id}/`)
        .then((res) => {
            dispatch({
                type: DELETE_COURSE,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};

// export const addPlayer = (player) => (dispatch) => {
//   axios
//     .post("/api/players/", player)
//     .then((res) => {
//       dispatch({
//         type: ADD_PLAYER,
//         payload: res.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };
