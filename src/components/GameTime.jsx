import React from 'react';
import { numberToBitset, padBitsetLeft } from '../utils.js';

class GameTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTicks: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const gameTicks = ev.target.value;
    this.setState({
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
          value={this.state.gameTicks}
          onChange={this.onChange}
        /> Game Ticks
      </div>
    );
  }

}

export default GameTime;
