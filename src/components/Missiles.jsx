import React, { PropTypes } from 'react';
import { numberToBitset, padBitsetLeft, isNumeric } from '../utils.js';

const missileCountMax = 255;

const isValidInput = (val) => {
  return isNumeric(val) && val < missileCountMax;
};

const Missiles = ({ saveMissileCount, value }) => {
  const onChange = (ev) => {
    // What was entered in the <input /> element
    const missileCountInput = ev.target.value;
    // The count to use for updating the missile count bits
    const missileCount = isValidInput(missileCountInput) ? Number(missileCountInput) : value;

    // Convert the value to an 8-bit bitset
    const missileBitset = padBitsetLeft(numberToBitset(missileCount), 8);
    saveMissileCount(missileBitset);
  };
  return (
    <div>
      <input
        type="number"
        min={0}
        max={255}
        value={value}
        onChange={onChange}
      /> Missiles
    </div>
  );
};

Missiles.propTypes = {
  saveMissileCount: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Missiles;
