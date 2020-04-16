import { combineReducers } from "redux";
import players from "./players";
import courses from "./courses";

export default combineReducers({
  players, courses,
});