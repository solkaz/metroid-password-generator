import React from 'react';
import { numberToBitset, padBitsetLeft, isNumeric } from '../utils.js';

const gameTimeMax = 4294967296;

const isValidInput = (val) => {
  return isNumeric(val) && val < gameTimeMax;
};


class GameTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTicks: 0,
      gameTicksInput: '0',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const gameTicksInput = ev.target.value;
    const gameTicks = isValidInput(gameTicksInput) ? Number(gameTicksInput) : this.state.gameTicks;
    this.setState({
      gameTicksInput,
      gameTicks,
    });

    // Convert the value to a 32-bit bitset
    const gameTicksBitset = padBitsetLeft(numberToBitset(gameTicks), 32);
    this.props.saveGameTime(gameTicksBitset);
  }

  render() {
    return (
      <div>
        <input
          type="number"
          min={0}
          max={4294967296}
          value={this.state.gameTicksInput}
          onChange={this.onChange}
        /> Game Ticks
      </div>
    );
  }

}

export default GameTime;
