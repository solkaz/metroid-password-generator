import React, { PropTypes } from 'react';
import { numberToBitset, padBitsetLeft, isNumeric } from '../utils.js';

const missileCountMax = 255;

const isValidInput = (val) => {
  return isNumeric(val) && val < missileCountMax;
}

class Missiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missileCount: 0,
      missileCountInput: '0',
    };
  }

  onChange = (ev) => {
    // What was entered in the <input /> element
    const missileCountInput = ev.target.value;
    // The count to use for updating the missile count bits
    const missileCount = isValidInput(missileCountInput) ? Number(missileCountInput) : this.state.missileCount;
    this.setState({
      missileCountInput,
      missileCount,
    });

    // Convert the value to an 8-bit bitset
    const missileBitset = padBitsetLeft(numberToBitset(missileCount), 8);
    this.props.saveMissileCount(missileBitset);
  }

  render() {
    return (
      <div>
        <input
          type="number"
          min={0}
          max={255}
          value={this.state.missileCountInput}
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
