import React, { PropTypes } from 'react';

import { numberToBitset, padBitsetRight, isNumeric } from '../utils.js';

const NumberRange = ({bitsetLength, maxValue, saveCallback, title, value}) => {
  const isValidInput = (val) => {
    return isNumeric(val) && val < maxValue;
  };
  const onChange = (ev) => {
    const inputValue = ev.target.value;
    const newValue = isValidInput(inputValue) ? Number(inputValue) : value;
    const newValueBitset = padBitsetRight(numberToBitset(newValue), bitsetLength);
    saveCallback(newValueBitset);
  };
  return (
    <div>
      <input
        type="number"
        min={0}
        max={maxValue}
        onChange={onChange}
        value={value}
      /> {title}
    </div>
  );
};

NumberRange.propTypes = {
  bitsetLength: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  saveCallback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default NumberRange;
