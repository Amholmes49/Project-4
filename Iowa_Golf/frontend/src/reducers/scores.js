import { GET_SCORES, ADD_SCORE } from "../actions/types.js";

const initialState = {
  scores: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SCORES:
      return {
        ...state,
        scores: action.payload,
      };
    // case DELETE_COURSE:
    //   return {
    //     ...state,
    //     courses: state.courses.filter((course) => course.id !== action.payload),
    //   };
    case ADD_SCORE:
      console.log(action)
      return {
        ...state,
        scores: [...state.scores, action.payload],
      };
    default:
      return state;
  }
}
