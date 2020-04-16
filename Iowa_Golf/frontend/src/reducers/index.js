import { combineReducers } from "redux";
import players from "./players";
import courses from "./courses";
import scores from "./scores";

export default combineReducers({
  players,
  courses,
  scores,
});
