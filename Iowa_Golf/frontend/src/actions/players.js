import axios from "axios";
import { GET_PLAYERS, DELETE_PLAYER, ADD_PLAYER } from "./types";

export const getPlayers = () => (dispatch) => {
  axios
    .get("/api/players/")
    .then((res) => {
      dispatch({
        type: GET_PLAYERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deletePlayer = (id) => (dispatch) => {
  axios
    .delete(`/api/players/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_PLAYER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addPlayer = (player) => (dispatch) => {
  axios
    .post("/api/players/", player)
    .then((res) => {
      dispatch({
        type: ADD_PLAYER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
