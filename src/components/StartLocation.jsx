import React, { PropTypes } from 'react';

import { bitsetToNumber } from '../utils.js';

const locationBitsets = {
  'Brinstar': [ false, false, false, false ],
  'Norfair': [ true, false, false, false ],
  'KraidsLair': [ false, true, false, false ],
  'Tourian': [ true, true, false, false ],
  'RidleysLair': [ false, false, true, false ],
};

const getLocationBitset = (location) => {
  if (locationBitsets[location]) {
    return locationBitsets[location];
  }
  return locationBitsets['Brinstar'];
};

const translateLocationBitset = (locationBitset) => {
  const bitsetValue = bitsetToNumber(locationBitset);
  switch (bitsetValue) {
    default:
    case 0: {
      return 'Brinstar';
    }
    case 1: {
      return 'Norfair';
    }
    case 2: {
      return 'KraidsLair';
    }
    case 3: {
      return 'Tourian';
    }
    case 4: {
      return 'RidleysLair';
    }
  }
}

const StartLocation = ({ locationBitset, saveStartLocation }) => {
  const onChange = (ev) => {
    const location = ev.target.value;
    /*
     * Samus' starting location is determined by bits 64-67, so with
     * 4 bits, there are theoretically 16 possible combinations. However,
     * There are five valid locations, which are turned on with the specified
     * bitset combinations:
     * Brinstar:      [ false, false, false, false]
     * Norfair:       [ true,  false, false, false]
     * Kraid's Lair:  [ false, true,  false, false]
     * Tourian:       [ true,  true,  false, false]
     * Ridley's Lair: [ false, false, true,  false]
     * Note that bit 67 is never turned on above; this is because it is considered
     * a 'reset' bit; any password that has it turned on will be considered
     * 'invalid' and cause Metroid to reset
     */

    const newLocationBitset = getLocationBitset(location);
    saveStartLocation(newLocationBitset);
  };

  const location = translateLocationBitset(locationBitset);

  return (
    <div>
      <input
        type="radio"
        name="startLocation"
        checked={location === 'Brinstar'}
        onChange={onChange}
        value="Brinstar"
      />Brinstar
      <input
        type="radio"
        name="startLocation"
        checked={location === 'Norfair'}
        onChange={onChange}
        value="Norfair"
      />Norfair
      <input
        type="radio"
        name="startLocation"
        checked={location === 'KraidsLair'}
        onChange={onChange}
        value="KraidsLair"
      />Kraid's Lair
      <input
        type="radio"
        name="startLocation"
        checked={location === 'Tourian'}
        onChange={onChange}
        value="Tourian"
      />Tourian
      <input
        type="radio"
        name="startLocation"
        checked={location === 'RidleysLair'}
        onChange={onChange}
        value="RidleysLair"
      />Ridley's Lair
    </div>
  );
};

StartLocation.propTypes = {
  locationBitset: PropTypes.arrayOf(PropTypes.bool).isRequired,
  saveStartLocation: PropTypes.func.isRequired,
};

export default StartLocation;
