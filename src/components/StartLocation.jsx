import React, { PropTypes } from 'react';

class StartLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Brinstar',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(ev) {
    const location = ev.target.value;
    this.setState({
      location
    });
    /*
     * Samus' starting location is determined by bits 64-67, so with
     * 4 bits, there are theoretically 16 possible combinations. However,
     * There are five valid locations, which are turned on with the specified
     * bitset combinations:
     * Brinstar: [false, false, false, false]
     * Norfair: [true, false, false, false]
     * Kraid's Lair: [false, true, false, false]
     * Ridley's Lair: [false, false, true, false]
     * Tourian: [true, true, false, false]
     * Note that bit 67 is never turned on above; this is because it is considered
     * a 'reset' bit; any password that has it turned on will be considered
     * 'invalid' and cause Metroid to reset
     */

    let newLocationBitset;
    switch (location) {
    default: {
      newLocationBitset = [false, false, false, false];
      break;
    }
    case 'Norfair': {
      newLocationBitset = [true, false, false, false];
      break;
    }
    case 'KraidsLair': {
      newLocationBitset = [false, true, false, false];
      break;
    }
    case 'RidleysLair': {
      newLocationBitset = [false, false, true, false];
      break;
    }
    case 'Tourian': {
      newLocationBitset = [true, true, false, false];
      break;
    }
    }
    this.props.saveStartLocation(newLocationBitset);
  }

  render() {
    const location = this.state.location;
    return (
      <div onChange={this.onChange}>
        <input
          type="radio"
          name="startLocation"
          checked={location === 'Brinstar'}
          value="Brinstar"
        />Brinstar
        <input
          type="radio"
          name="startLocation"
          checked={location === 'Norfair'}
          value="Norfair"
        />Norfair
        <input
          type="radio"
          name="startLocation"
          checked={location === 'KraidsLair'}
          value="KraidsLair"
        />Kraid's Lair
        <input
          type="radio"
          name="startLocation"
          checked={location === 'RidleysLair'}
          value="RidleysLair"
        />Ridley's Lair
        <input
          type="radio"
          name="startLocation"
          checked={location === 'Tourian'}
          value="Tourian"
        />Tourian
      </div>
    );
  }
}

StartLocation.propTypes = {
  saveStartLocation: PropTypes.func.isRequired,
};

export default StartLocation;
