import React, { PropTypes } from 'react';
import { numberToBitset, padBitsetLeft } from '../utils.js';

class Missiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missiles: 0,
    };
  }

  onChange = (ev) => {
    const missiles = ev.target.value;
    this.setState({
      missiles,
    });

    // Convert the value to an 8-bit bitset
    const missilesBitset = padBitsetLeft(numberToBitset(missiles), 8);
    this.props.saveMissileCount(missilesBitset);
  }

  render() {
    return (
      <div>
        <input
          type="number"
          min={0}
          max={255}
          value={this.state.missiles}
          onChange={this.onChange}
        /> Missiles
      </div>
    );
  }
}

Missiles.propTypes = {
  saveMissileCount: PropTypes.func.isRequired,
};

export default Missiles;
