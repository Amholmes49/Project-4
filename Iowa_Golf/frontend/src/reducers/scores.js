import { GET_SCORES } from "../actions/types.js";

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
    // case ADD_COURSE:
    //   return {
    //     ...state,
    //     courses: [...state.courses, action.payload],
    //   };
    default:
      return state;
  }
}
