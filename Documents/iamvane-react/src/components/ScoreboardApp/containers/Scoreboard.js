import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import PropTypes from 'prop-types';

class Scoreboard extends Component{

  render() {

    const {dispatch, players} = this.props;
    const addPlayer =  bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index)=>(
      <Player
      index={index}
      name={player.name}
      score={player.score}
      key={player.name}
      updatePlayerScore = {updatePlayerScore}
      removePlayer = {removePlayer}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">

          {playerComponents}

        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  };
};

const mapStateToProps = state =>(
  {
    players: state
  }
);

Scoreboard.propTypes = {
  players: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Scoreboard);