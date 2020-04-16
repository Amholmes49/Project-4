import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlayers, deletePlayer } from "../../actions/players";

export class Players extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
    getPlayers: PropTypes.func.isRequired,
    deletePlayer: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    return (
      <Fragment>
        <h1>Player List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Handicap</th>
            </tr>
          </thead>
          <tbody>
            {this.props.players.map((player) => (
              <tr key={player.id}>
                {/* <td>{player.id}</td> */}
                <td>{player.full_name}</td>
                <td>{player.user_name}</td>
                <td>{player.email}</td>
                <td>{player.handicap}</td>
                <td>
                  <button
                    onClick={this.props.deletePlayer.bind(this, player.id)}
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
  players: state.players.players,
});
export default connect(mapStateToProps, { getPlayers, deletePlayer })(Players);
